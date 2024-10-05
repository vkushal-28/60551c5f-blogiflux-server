const aws = require("aws-sdk");
const dotenv = require("dotenv");

dotenv.config();

exports.s3 = new aws.S3({
  region: "ca-central-1",
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});
