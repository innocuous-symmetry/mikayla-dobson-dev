import { env } from "@/env.mjs";
import { S3Client, S3ClientConfig } from "@aws-sdk/client-s3";
import { NodeHttpHandler } from "@smithy/node-http-handler";
import https from "https";

export default function createS3Client() {
    if (typeof env.S3_ACCESS_KEY !== "string") {
        throw new Error("S3_ACCESS_KEY is not defined");
    }

    if (typeof env.S3_SECRET !== "string") {
        throw new Error("S3_SECRET is not defined");
    }

    const config: S3ClientConfig = {
        region: env.S3_REGION,
        credentials: {
            accessKeyId: env.S3_ACCESS_KEY,
            secretAccessKey: env.S3_SECRET,
        }
    }

    return new S3Client(config);
}