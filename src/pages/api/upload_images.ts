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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "POST") {
    console.log("POST method received at: /api/");

    const images: any[] = req.body?.images;

    const BUCKET: string = process.env.S3_BUCKET!;
    const REGION: string = process.env.S3_BUCKET_REGION!;
    const client: S3Client = new S3Client({ region: REGION });
    for (const image of images) {
      // Skip if name or base64 string of image are undefined
      if (!image.name || !image.b64s) continue;

      console.log(`Processing: ${image.name}...`);
      console.log("Creating buffer...");
      const buffer: Buffer = Buffer.from(image.b64s, "base64");
      console.log("Constructing input...");
      const input: PutObjectCommandInput = {
        Bucket: BUCKET,
        Key: image.name,
        Body: image.b64s,
        ContentEncoding: "base64",
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

