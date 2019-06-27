import * as AWS from "aws-sdk";
import { config } from "../config/config";

const s3 = new AWS.S3({
  region: config.AWS_REGION,
  accessKeyId: config.AWS_ACCESS_KEY_ID,
  secretAccessKey: config.AWS_SECRET_ACCESS_KEY
});

export async function listObjects() {
  const bucketDefinition = await s3
    .listObjectsV2({
      Bucket: config.AWS_BUCKET_NAME
    })
    .promise();

  if (!bucketDefinition.IsTruncated) {
    process.stdout.write("Bucket was truncated");
    return;
  }

  if (bucketDefinition.Contents === []) {
    process.stdout.write("Bucket is empty");
    return;
  }

  for (entry of bucketDefinition.Contents) {
    process.stdout.write(JSON.stringify(entry));
  }

  return;
}
