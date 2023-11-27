import { S3Client } from '@aws-sdk/client-s3';
// import Redis from 'ioredis';
import pg from 'pg';
import { createDBClient } from '../db/createClient';
import { Maybe, must } from '@/util/helpers';
import { createS3Client } from '../s3';
import createRedisClient from '../cache/createClient';
import { ParseParams, SafeParseReturnType } from 'zod';
import { MongoClient, WithId, Filter, InsertOneResult } from 'mongodb';

type FullParserType<T extends { [key: string]: any }> = (data: any, params?: Partial<ParseParams> | undefined) => SafeParseReturnType<any, T>

type ControllerOptions<T extends { [key: string]: any }> = {
    tableName: string
    parser?: FullParserType<T>
}

export default abstract class BaseController<T extends { _id?: any, [key: string]: any }> {
    protected client: MongoClient
    collectionName: string
    parser?: FullParserType<T>

    constructor(options: ControllerOptions<T>) {
        this.collectionName = options.tableName;
        this.client = createDBClient();
        this.parser = options.parser;
    }

    async getAll() {
        'use server';

        let result: Maybe<WithId<T>[]>;

        try {
            // we'll enable cache here later
            await this.client.connect();
            result = await this.client.db().collection<T>(this.collectionName)
                .find()
                .toArray();

            return result;
        } catch (error) {
            console.log({ error });
            result = null;
        } finally {
            await this.client.close();
            return result;
        }
    }

    async getByID(id: number): Promise<Maybe<WithId<T>>> {
        let result: Maybe<WithId<T>>;

        try {
            await this.client.connect();
            result = await this.client.db().collection<T>(this.collectionName)
                .findOne({ where: { _id: id }});
        } catch (error) {
            console.log({ error });
            result = null;
        } finally {
            await this.client.close();
            return result;
        }
    }

    async post(data: T) {
        let result: Maybe<InsertOneResult<T>>;

        try {
            await this.client.connect();
            result = await this.client.db().collection<T>(this.collectionName)
                .insertOne(data as any);
        } catch(error) {
            console.log({ error });
            result = null;
        } finally {
            await this.client.close();
            return result;
        }
    }
}
