// NOTE: This script uses the AWS-SDK v2 to push a text file to an S3 bucket

// Dependencies
import AWS from "aws-sdk";
import dotenv from "dotenv";
dotenv.config();

export default async function main() {
  const bucket: string = process.env.S3_BUCKET!;

  // Create object
  console.log("Pushing object to S3 bucket: ", bucket);
  const s3 = new AWS.S3;
  await s3.putObject({
    Body: "hello world",
    Bucket: bucket,
    Key: "sample.txt",
  }).promise();
}

main()
  .then(() => process.exit(0));

