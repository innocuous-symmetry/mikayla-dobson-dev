import { createEnv } from "@t3-oss/env-nextjs";
import { z } from 'zod';

const env = createEnv({
    server: {
        POSTGRES_URL: z.string().url(),
        POSTGRES_USER: z.string(),
        POSTGRES_PASSWORD: z.string(),
    },
    runtimeEnv: {
        POSTGRES_URL: process.env.POSTGRES_URL,
        POSTGRES_USER: process.env.POSTGRES_USER,
        POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    }
})

export { env }
