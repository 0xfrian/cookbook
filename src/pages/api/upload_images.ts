// Environmental variables
import dotenv from "dotenv";
dotenv.config();

// Packages
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

// Types
import type { NextApiRequest, NextApiResponse } from "next";
import type {
  PutObjectCommandInput,
  PutObjectCommandOutput,
} from "@aws-sdk/client-s3";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "POST") {
    console.log("POST method received at: /api/");

    const BUCKET: string = process.env.S3_BUCKET!;
    const REGION: string = process.env.S3_BUCKET_REGION!;
    const client: S3Client = new S3Client({ region: REGION });

    const images: any[] = req.body?.data;
    for (const image of images) {
      // Skip if name of image is undefined
      if (!image.name) continue;
    
      console.log(`Processing: ${image.name}...`);
      console.log("Constructing input...");
      const input: PutObjectCommandInput = {
        Bucket: BUCKET,
        Key: image.name,
        Body: image.data,
        ContentType: image.type,
      };
      console.log("Constructing command...");
      const command: PutObjectCommand = new PutObjectCommand(input);
      console.log("Sending command...");
      const response: PutObjectCommandOutput = await client.send(command);
      console.log("Done");
    }
    console.log();
    res.status(200);
  }
}

