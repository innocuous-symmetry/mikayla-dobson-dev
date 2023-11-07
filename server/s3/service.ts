import { S3Client } from "@aws-sdk/client-s3";
import createS3Client from "./createClient";

export default class S3Service {
    #client?: S3Client;
    #redis?: any;

    constructor() {
        this.#client = createS3Client();
        this.#redis = null;
    }
}
