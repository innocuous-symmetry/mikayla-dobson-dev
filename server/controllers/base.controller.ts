import { S3Client } from '@aws-sdk/client-s3';
import Redis from 'ioredis';
import pg from 'pg';
import { createDBClient } from '../db';
import { Maybe, must } from '@/util/helpers';
import { createS3Client } from '../s3';
import createRedisClient from '../cache/createClient';
import { ParseParams, SafeParseReturnType } from 'zod';

type FullParserType<T> = (data: any, params?: Partial<ParseParams> | undefined) => SafeParseReturnType<any, T>

type ControllerOptions<T> = {
    tableName: string
    parser?: FullParserType<T>
}

export default abstract class BaseController<T> {
    #db: pg.Client
    #bucket: S3Client
    #cache: Redis

    tableName: string
    parser?: FullParserType<T>

    constructor(options: ControllerOptions<T>) {
        this.#db        = must(createDBClient);
        this.#bucket    = must(createS3Client);
        this.#cache     = must(createRedisClient);

        this.tableName  = options.tableName;
        this.parser     = options.parser;
    }

    async getAll(projection?: string): Promise<Maybe<T[]>> {
        try {
            // we'll enable cache here later

            const result = await this.#db.query("SELECT $1 FROM $2", [projection ?? "*", this.tableName]);
            return result.rows;
        } catch (error) {
            console.log({ error });
            return null;
        }
    }

    async getByID(id: number, projection?: string): Promise<Maybe<T>> {
        try {
            const result = await this.#db.query("SELECT $1 FROM $2 WHERE id = $3", [projection ?? "*", this.tableName, id]);
            return result.rows[0];
        } catch (error) {
            console.log({ error });
            return null;
        }
    }
}
