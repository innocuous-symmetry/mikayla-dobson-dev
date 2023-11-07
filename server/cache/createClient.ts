import Redis, { type RedisOptions } from "ioredis"
import { env } from "@/env.mjs";

export default function createRedisClient() {
    const config: RedisOptions = {
        host: env.KV_URL,
    }

    return new Redis(config);
}
