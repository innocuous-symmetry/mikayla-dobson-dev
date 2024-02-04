import { createDBClient } from '../db/createClient';
import { Maybe } from '@/util/helpers';
import { ParseParams } from 'zod';
import { MongoClient, WithId, ObjectId, InsertOneResult, Filter } from 'mongodb';

type FullParserType<T extends { [key: string]: any }> = (data: any, params?: Partial<ParseParams>) => T;

type ControllerOptions<T extends { [key: string]: any }> = {
    tableName: string
    parse: FullParserType<T>
}

export default abstract class BaseController<T extends { _id?: any, [key: string]: any }> {
    protected client: MongoClient | null;
    protected collectionName: string
    protected parse: FullParserType<T>

    constructor(options: ControllerOptions<T>) {
        this.collectionName = options.tableName;
        this.client = createDBClient();
        this.parse = options.parse;
    }

    async getAll() {
        if (!this.client) return null;
        let result: Maybe<WithId<T>[]>;

        try {
            // we'll enable cache here later
            await this.client.connect();
            result = await this.client.db('mikayladotdev').collection<T>(this.collectionName)
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

    async getByID(id: string): Promise<Maybe<WithId<T>>> {
        if (!this.client) return null;
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
        if (!this.client) return null;
        
        let result: Maybe<InsertOneResult<T>>;
        this.parse(data);

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
