// Environmental variables
import dotenv from "dotenv";
dotenv.config();

// Packages
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

// Types
import type { NextApiRequest, NextApiResponse } from "next";
import type {
  GetObjectCommandInput,
  GetObjectCommandOutput,
} from "@aws-sdk/client-s3";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "POST") {
    console.log("POST method received at: /api/");

    const key: string = req.body?.image_name;

    const BUCKET: string = process.env.S3_BUCKET!;
    const REGION: string = process.env.S3_BUCKET_REGION!;
    const client: S3Client = new S3Client({ region: REGION });

    console.log(`Fetching: ${key}...`);
    const input: GetObjectCommandInput = {
      Bucket: BUCKET,
      Key: key,
    };
    console.log("Constructing command...");
    const command: GetObjectCommand = new GetObjectCommand(input);
    console.log("Sending command...");
    const image: GetObjectCommandOutput = await client.send(command);
    console.log("Done");
    const image_src: any = await image.Body?.transformToString()!;
    res.status(200).json({
      image_src: image_src,
    });
    console.log();
  }
}


