'use client';
import { MusicStreamingEntry } from "@/server/db/schema";
import { AudioTrack } from "./AudioTrack"
import { _Object } from "@aws-sdk/client-s3";
import { TrackWithURL } from "@/server/s3/service";

export function AudioGallery({ trackList, collection }: { trackList: TrackWithURL[], collection: MusicStreamingEntry }) {
    return (
        <div className="p-8 m-8 rounded-lg bg-neutral-600">
            { trackList.length
                ? trackList.map((each, idx) => {
                    if (!(each.Key.includes(".wav") || each.Key.includes(".mp3"))) return <div key={idx} />
                    return <AudioTrack metadata={each} collection={collection} key={idx} />
                })
                : <p>No audio results found for this work.</p>
            }
        </div>
    )
}
