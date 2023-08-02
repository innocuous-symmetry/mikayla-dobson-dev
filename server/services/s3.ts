import { S3Client } from "@aws-sdk/client-s3";

export default function createS3Client() {
    if (typeof process.env.S3_ACCESS_KEY !== "string") {
        throw new Error("S3_ACCESS_KEY is not defined");
    }

    if (typeof process.env.S3_SECRET !== "string") {
        throw new Error("S3_SECRET is not defined");
    }

    return new S3Client({
        region: "us-east-1",
        credentials: {
            accessKeyId: process.env.S3_ACCESS_KEY,
            secretAccessKey: process.env.S3_SECRET,
        },
    });
}
