import { z } from 'zod';

const filePathMatcher = /^[1-9]{1,3}\.(wav|mp3|(jpe?g)|png)$/;
const ZFileName = z.string().regex(filePathMatcher);

export const ZMusicStreamingEntry = z.object({
    id: z.number(),
    name: z.string().max(100),
    shortDescription: z.string().max(100),
    longDescription: z.string().max(1000),
    pathToEntry: z.string(),
    tags: z.array(z.string().max(100)).optional(),
});

export type MusicStreamingEntry = z.infer<typeof ZMusicStreamingEntry>;
export type ValidFileName = z.infer<typeof ZFileName>;
