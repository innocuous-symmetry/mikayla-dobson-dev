import { GetObjectCommand, ListObjectsV2Command, S3Client, _Object } from "@aws-sdk/client-s3";
import { env } from "@/env.mjs";
import createS3Client from "./createClient";
import { Maybe, must } from "@/util/helpers";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export type TrackWithURL = (Required<Pick<_Object, "Key">> & _Object) & { url: string }

export default class S3Service {
    static asEndpoint(key: string): string {
        return `${env.S3_ENDPOINT}/${env.S3_BUCKET}/${key}`;
    }

    static async getURL(location: string): Promise<Maybe<string>> {
        try {
            const client = must(createS3Client);

            const command = new GetObjectCommand({
                Bucket: env.S3_BUCKET,
                Key: location
            });

            const url = await getSignedUrl(client, command, { expiresIn: 3600 });
            return url
        } catch (error) {
            console.log({ error });
            return null;
        }
    }

    static async listObjects(key: string): Promise<Maybe<_Object[]>> {
        try {
            const client: S3Client = must(createS3Client);
            let remaining = 50;

            // initialize list objects command
            const cmd = new ListObjectsV2Command({
                Bucket: env.S3_BUCKET,
                Prefix: key,
            });

            let isTruncated = true;
            const result = new Array<_Object>();

            // loop through until all resources have been enumerated
            while (isTruncated && remaining > 0) {
                --remaining;
                const res = await client.send(cmd);

                const { Contents, IsTruncated, NextContinuationToken } = res;

                if (Contents) result.push(...Contents);
                isTruncated = IsTruncated ?? false;
                cmd.input.ContinuationToken = NextContinuationToken;
            }

            return result;
        } catch (error) {
            console.log({ error });
            return null;
        }
    }

    static async getURLs(key: string): Promise<{
        files: Maybe<_Object[]>,
        urlList: Maybe<string[]>
    }> {
        try {
            const files = await this.listObjects(key);
            const urlList = new Array<string>();

            files?.forEach(async(file) => {
                if (file.Key) {
                    const url = await this.getURL(file.Key);
                    if (url) urlList.push(url);
                }
            });

            return { files, urlList }
        } catch (error) {
            console.log({ error });
            return { files: null, urlList: null }
        }
    }

    static async prepareTrackList(key: string): Promise<TrackWithURL[]> {
        const result = new Array<TrackWithURL>();

        try {
            const files = await this.listObjects(key);

            files?.forEach(async(file) => {
                if (file.Key) {
                    const url = await this.getURL(file.Key);
                    if (url) result.push({ ...file, url, Key: file.Key });
                }
            })

            return result;
        } catch (error) {
            console.log({ error });
            return new Array<TrackWithURL>();
        }
    }
}
