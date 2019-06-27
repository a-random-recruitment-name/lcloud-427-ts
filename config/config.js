const dotEnvPath = '.env'
require('dotenv').config({ path: dotEnvPath })

export const config = {
  AWS_REGION: process.env.AWS_REGION,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
}
