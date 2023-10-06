import { Client } from "pg";

export class PostgresError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "PostgresError";
    }
}

export default function createClient() {
    if (!process.env.POSTGRES_URL) {
        throw new PostgresError("Database connection configured incorrectly")
    }

    return new Client({
        connectionString: process.env.POSTGRES_URL
    });

}
