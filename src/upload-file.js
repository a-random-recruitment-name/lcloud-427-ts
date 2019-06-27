import { s3, bucketName } from "../config/bucket";
import * as path from 'path';
import * as fs from 'fs';

export async function uploadFile(args) {
  const pathToFile = args[2];

  if (!pathToFile) {
    return process.stderr.write("You need to provide path to file");
  }

  const Key = `random-path-${Math.floor(Math.random() * 20)}`;
  console.log(path.relative(pathToFile))
  const file = fs.readFileSync(path.relative(pathToFile))

  const params = {
    Bucket: bucketName,
    Key,
    Body: file
  };

  try {
    process.stdout.write(`Staring file upload at ${Date.now()}`);

    await s3.putObject(params).promise();
  } catch (err) {
    process.stderr.write(`Failed to upload file to s3: ${err}`);
  }

  process.stdout.write(`Finished file upload at ${Date.now()}`);

  return;
}
