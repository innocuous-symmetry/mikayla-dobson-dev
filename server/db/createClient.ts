import { env } from "@/env.mjs";
import { MongoClient, MongoClientOptions } from "mongodb";

export function createDBClient(opts?: MongoClientOptions) {
    return new MongoClient(env.MONGO_URL, opts)
}
