'use client';
import { MusicStreamingEntry } from "@/server/db/schema";
import { Maybe } from "@/util/helpers";

export default function FullMusicList({ allResults }: { allResults?: Maybe<Partial<MusicStreamingEntry>[]> }) {
    return (
        <div>
        { allResults
            ? allResults.map((result, idx) => {
                return (
                    <div key={idx}>
                        <a href={`/listen/${result.id}`}>{result.name}</a>
                    </div>
                )
            }) : <p>No music available for streaming.</p>
        }
        </div>
    )
}
