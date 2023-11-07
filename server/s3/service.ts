import { ListObjectsV2Command, PutObjectCommand, PutObjectCommandOutput, S3Client, _Object } from "@aws-sdk/client-s3";
import { env } from "@/env.mjs";
import createS3Client from "./createClient";
import { Maybe, must } from "@/util/helpers";
import { readFile } from "fs/promises";
import { readFileSync, readdir } from "fs";

export default class S3Service {
    static async getFiles(key: string): Promise<Maybe<_Object[]>> {
        try {
            const client = must<S3Client>(createS3Client);
            const cmd = new ListObjectsV2Command({
                Bucket: env.S3_BUCKET,
                Prefix: key,
            });

            const { Contents } = await client.send(cmd);
            return Contents;
        } catch (error) {
            console.log({ error });
            return null;
        }
    }

    static async getURLs(key: string): Promise<Maybe<string[]>> {
        try {
            const files = await this.getFiles(key);

            return files
                ? files.map((file) => `${env.S3_ENDPOINT}/${env.S3_BUCKET}/${file.Key}`)
                : null;
        } catch (error) {
            console.log({ error });
            return null;
        }
    }

    static async upload(filePath: string, key: string) {
        if (env.NODE_ENV != "development") {
            throw new Error("Cannot upload files in production");
        }

        try {
            const client = must<S3Client>(createS3Client);
            const Body = await readFile(filePath);

            const cmd = new PutObjectCommand({
                Bucket: env.S3_BUCKET,
                Key: key,
                Body,
            });

            const result = await client.send(cmd);
            return result.$metadata.httpStatusCode == 200;
        } catch (error) {
            console.log({ error });
            return null;
        }
    }

    static async uploadAllInDirectory(dirPath: string, prefix: string): Promise<boolean> {
        if (env.NODE_ENV != "development") {
            throw new Error("Cannot upload files in production");
        }

        try {
            const client = must<S3Client>(createS3Client);
            const promises = new Array<Promise<PutObjectCommandOutput>>();
            const results = new Array<boolean>();

            readdir(dirPath, (err, files) => {
                if (err) {
                    console.log({ err });
                    return null;
                }

                files.forEach(file => {
                    const Key = `${prefix}/${file}`
                    const Body = readFileSync(Key);

                    const cmd = new PutObjectCommand({
                        Bucket: env.S3_BUCKET,
                        Key,
                        Body,
                    })

                    promises.push(client.send(cmd));
                })
            })

            promises.forEach(p => {
                setTimeout(async() => {
                    const output = await Promise.resolve(p);
                    results.push(output.$metadata.httpStatusCode == 200);
                }, 1000)
            })

            return results.every(r => true);
        } catch (error) {
            console.log({ error });
            return false;
        }
    }
}
