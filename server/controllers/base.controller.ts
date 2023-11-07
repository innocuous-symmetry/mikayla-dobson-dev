import { S3Client } from '@aws-sdk/client-s3';
import Redis from 'ioredis';
import pg from 'pg';
import createClient from '../db';
import { must } from '@/util/helpers';
import { createS3Client } from '../s3';
import createRedisClient from '../cache';

export default abstract class BaseController<T> {
    #db: pg.Client
    #bucket: S3Client
    #cache: Redis

    constructor() {
        this.#db = must(createClient);
        this.#bucket = must(createS3Client);
        this.#cache = must(createRedisClient);
    }
}
