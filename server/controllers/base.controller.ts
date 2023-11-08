import { S3Client } from '@aws-sdk/client-s3';
// import Redis from 'ioredis';
import pg from 'pg';
import { createDBClient } from '../db';
import { Maybe, must } from '@/util/helpers';
import { createS3Client } from '../s3';
import createRedisClient from '../cache/createClient';
import { ParseParams, SafeParseReturnType } from 'zod';

type FullParserType<T extends { [key: string]: any }> = (data: any, params?: Partial<ParseParams> | undefined) => SafeParseReturnType<any, T>

type ControllerOptions<T extends { [key: string]: any }> = {
    tableName: string
    parser?: FullParserType<T>
}

export default abstract class BaseController<T extends { [key: string]: any }> {
    protected db: pg.Client
    // #bucket: S3Client
    // #cache: Redis

    tableName: string
    parser?: FullParserType<T>

    constructor(options: ControllerOptions<T>) {
        this.db        = must(createDBClient);
        // this.#bucket    = must(createS3Client);
        // this.#cache     = must(createRedisClient);

        this.tableName  = options.tableName;
        this.parser     = options.parser;
    }

    async getAll(): Promise<Maybe<T[]>> {
        'use server';
        try {
            // we'll enable cache here later
            await this.db.connect();
            const result = await this.db.query(`SELECT * FROM ${this.tableName}`);

            if (this.parser) {
                result.rows.forEach((row, idx) => {
                    const parsed = (this.parser as FullParserType<T>)(row);
                    if (!parsed.success) {
                        console.log(`Failed to parse row ${idx} of ${this.tableName}`);
                        console.log(parsed.error);
                    }
                })
            }

            return result.rows;
        } catch (error) {
            console.log({ error });
            return null;
        } finally {
            await this.db.end();
        }
    }

    async getByID(id: number, projection?: (keyof T)[]): Promise<Maybe<T>> {
        try {
            await this.db.connect();
            const finalProjection = projection?.join(", ") ?? "*";

            const result = await this.db.query(`SELECT ${finalProjection} FROM ${this.tableName} WHERE id = ${id}`);

            if (this.parser) {
                const parsed = this.parser(result.rows[0]);
                if (parsed.success) return parsed.data;
            }

            return result.rows[0];
        } catch (error) {
            console.log({ error });
            return null;
        } finally {
            await this.db.end();
        }
    }
}
