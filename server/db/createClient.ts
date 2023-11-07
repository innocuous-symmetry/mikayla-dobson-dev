import { env } from "@/env.mjs";
import { Client } from "pg";

export default function createDBClient() {
    try {
        return new Client({
            connectionString: `${env.POSTGRES_URL}?sslmode=require`,
            // user: env.POSTGRES_USER,
            // password: env.POSTGRES_PASSWORD,
        });
    } catch(e) {
        console.log('error creating client', e);
        return null;
    }
}
