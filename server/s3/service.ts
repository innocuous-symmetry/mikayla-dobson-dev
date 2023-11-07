import { ListObjectsV2Command, PutObjectCommand, PutObjectCommandOutput, S3Client, _Object } from "@aws-sdk/client-s3";
import { env } from "@/env.mjs";
import createS3Client from "./createClient";
import { Maybe, must } from "@/util/helpers";

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
}
