import { env } from "@/env.mjs";
import { MongoClient } from "mongodb";

export function createDBClient() {
    return new MongoClient(env.MONGO_URL, {
        tls: true,
        tlsCertificateKeyFile: process.cwd() + "/certs/mongo_cert.pem",
    });
}
