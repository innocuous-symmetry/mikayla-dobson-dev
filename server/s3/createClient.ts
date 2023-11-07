import { env } from "@/env.mjs";
import { S3Client, S3ClientConfig } from "@aws-sdk/client-s3";
import { NodeHttpHandler } from "@smithy/node-http-handler";
import https from "https";

export default function createS3Client() {
    if (typeof process.env.S3_ACCESS_KEY !== "string") {
        throw new Error("S3_ACCESS_KEY is not defined");
    }

    if (typeof process.env.S3_SECRET !== "string") {
        throw new Error("S3_SECRET is not defined");
    }

    const config: S3ClientConfig = {
        endpoint: env.S3_ENDPOINT,
        region: "us-east-1",

        requestHandler: new NodeHttpHandler({
            httpsAgent: new https.Agent({
                rejectUnauthorized: false,
                ciphers: "ALL",
            }),
        }),

        forcePathStyle: true,
    }

    if (env.S3_SECRET) {
        config["credentials"] = {
            accessKeyId: env.S3_ACCESS_KEY,
            secretAccessKey: env.S3_SECRET,
        }
    }

    return new S3Client(config);
}
