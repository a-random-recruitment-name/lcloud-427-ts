import * as AWS from "aws-sdk";
import { config } from "./config";

export const s3 = new AWS.S3({
  region: config.AWS_REGION,
  accessKeyId: config.AWS_ACCESS_KEY_ID,
  secretAccessKey: config.AWS_SECRET_ACCESS_KEY
});
export const bucketName = config.AWS_BUCKET_NAME
