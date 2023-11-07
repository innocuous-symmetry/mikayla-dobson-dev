import { createEnv } from "@t3-oss/env-nextjs";
import { z } from 'zod';

const env = createEnv({
    server: {
        POSTGRES_URL: z.string().url(),
        POSTGRES_USER: z.string(),
        POSTGRES_PASSWORD: z.string(),

        S3_ENDPOINT: z.string().url(),
        S3_ACCESS_KEY: z.string(),
        S3_SECRET: z.string().optional(),

        KV_URL: z.string(),
    },
    runtimeEnv: {
        POSTGRES_URL: process.env.POSTGRES_URL,
        POSTGRES_USER: process.env.POSTGRES_USER,
        POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,

        S3_ENDPOINT: process.env.S3_ENDPOINT,
        S3_ACCESS_KEY: process.env.S3_ACCESS_KEY,
        S3_SECRET: process.env.S3_SECRET,

        KV_URL: process.env.KV_URL,
    }
})

export { env }
