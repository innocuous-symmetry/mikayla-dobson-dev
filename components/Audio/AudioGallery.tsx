'use client';

import { useEffect } from "react"
import { AudioTrack } from "./AudioTrack"

export function AudioGallery({ urlList }: { urlList: string[] }) {
    useEffect(() => console.log(urlList), [urlList]);
    return (
        <div>
            {urlList.map((each, idx) => {
                return <AudioTrack src={each} key={idx} />
            })}
        </div>
    )
}
