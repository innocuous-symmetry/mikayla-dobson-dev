export class PostgresError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "PostgresError";
    }
}
