import { createEnv } from "@t3-oss/env-nextjs";
import { z } from 'zod';

const env = createEnv({
    server: {
        SMTP_USER: z.string().optional(),
        SMTP_PASS: z.string().optional(),
        SMTP_TO: z.string().optional(),
        SMTP_HOST: z.string().optional(),
    },
    runtimeEnv: {
        SMTP_USER: process.env.SMTP_USER,
        SMTP_PASS: process.env.SMTP_PASS,
        SMTP_TO: process.env.SMTP_TO,
        SMTP_HOST: process.env.SMTP_HOST,
    },
})

export { env }
