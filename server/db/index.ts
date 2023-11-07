import { env } from "@/env.mjs";
import pg from 'pg';
const { Client } = pg;

export class PostgresError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "PostgresError";
    }
}

export default function createClient() {
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
