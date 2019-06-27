import { s3, bucketName } from "../config/bucket";
import * as path from 'path';
import * as fs from 'fs';

export async function uploadFile(args) {
  const pathToFile = args[2];

  if (!pathToFile) {
    return process.stderr.write("You need to provide path to file");
  }

  const Key = `random-file-name-${Math.floor(Math.random() * 20)}`;
  const file = fs.readFileSync(pathToFile)
  const params = {
    Bucket: bucketName,
    Key,
    Body: file
  };

  try {
    process.stdout.write(`Staring file upload at ${Date.now()}`);
    await s3.putObject(params).promise();
    process.stdout.write(`Finished file upload at ${Date.now()}`);
  } catch (err) {
    process.stderr.write(`Failed to upload file to s3: ${err}`);
  }

  return;
}
