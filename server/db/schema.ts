import { z } from 'zod';

const filePathMatcher = /^[1-9]{1,3}\.(wav|mp3|(jpe?g)|png)$/;
const ZFileName = z.string().regex(filePathMatcher);

export const ZMusicStreamingEntry = z.object({
    id: z.number(),
    name: z.string().max(100),
    shortdescription: z.string().max(100),
    longdescription: z.string().max(1000),

    /** where to find the track in AWS S3 */
    pathtoentry: z.string(),

    // optional properties
    artist: z.string().max(100).optional(),
    year: z.number().min(1900).max(2100).optional(),
    tags: z.array(z.string().max(100)).optional(),
});

export type MusicStreamingEntry = z.infer<typeof ZMusicStreamingEntry>;
export type ValidFileName = z.infer<typeof ZFileName>;
