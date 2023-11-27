import { env } from "@/env.mjs";
import { MongoClient } from "mongodb";

export function createDBClient() {
    return new MongoClient(env.MONGO_URL, {
        auth: {
            username: env.MONGO_USER,
            password: env.MONGO_PASSWORD,
        }
    })
}
