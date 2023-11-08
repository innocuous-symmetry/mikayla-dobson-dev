'use client';
import { AudioTrack } from "./AudioTrack"
import { Maybe } from "@/util/helpers";

export function AudioGallery({ urlList }: { urlList: Maybe<string[]> }) {
    return (
        <div>
            { urlList
                ? urlList.map((each, idx) => {
                    return <AudioTrack src={each} key={idx} />
                }) : <p>No audio results found for this work.</p>
            }
        </div>
    )
}
