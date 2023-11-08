'use client';
import { MusicStreamingEntry } from "@/server/db/schema";
import { Maybe } from "@/util/helpers";
import Link from "../ui/Link";

export default function FullMusicList({ allResults }: { allResults?: Maybe<Partial<MusicStreamingEntry>[]> }) {
    return (
        <div>
        { allResults
            ? allResults.map((result, idx) => {
                return (
                    <div key={idx}>
                        <Link href={`/listen/${result.id}`}>{result.name}</Link>
                    </div>
                )
            }) : <p>No music available for streaming.</p>
        }
        </div>
    )
}
