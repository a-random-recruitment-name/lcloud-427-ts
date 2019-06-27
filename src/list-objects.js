import { config } from "../config/config";
import { bucketName, s3 } from "../config/bucket";

export async function listObjects() {
  const bucketDefinition = await s3
    .listObjectsV2({
      Bucket: bucketName
    })
    .promise();

  if (bucketDefinition.IsTruncated) {
    process.stdout.write("Bucket was truncated");

    return;
  }

  if (bucketDefinition.Contents === []) {
    process.stdout.write("Bucket is empty");

    return;
  }

  for (const entry of bucketDefinition.Contents) {
    process.stdout.write(`Filename: ${JSON.stringify(entry.Key)}\n`);
  }

  return;
}
