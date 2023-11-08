'use client';
import useAudio from "@/hooks/useAudio";
import { MusicStreamingEntry } from "@/server/db/schema";
import { TrackWithURL } from "@/server/s3/service";
import { prettyFileName } from "@/util/helpers";
import { useCallback, useMemo } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

export function AudioTrack({ collection, metadata }: { collection: MusicStreamingEntry, metadata: TrackWithURL }) {
    const { isPlaying, currentTrack, setIsPlaying, handleTrackChange } = useAudio();

    const isMatchingTrack: boolean = useMemo(() => {
        return currentTrack?.Key == metadata.Key;
    }, [currentTrack, metadata]);

    const handleClick = useCallback(() => {
        console.log({ isMatchingTrack, isPlaying, currentTrack })

        if (!currentTrack) {
            handleTrackChange(metadata, collection);
            return;
        }

        if (isMatchingTrack && isPlaying) {
            setIsPlaying(false);
            return;
        }

        handleTrackChange(metadata, collection);
    }, [currentTrack, collection, metadata, isMatchingTrack, isPlaying, setIsPlaying, handleTrackChange])

    return (
        <div className="flex">
            <div>
                <button className="mr-3" onClick={handleClick}>
                    { isMatchingTrack && isPlaying
                        ? <FaPause className="h-8 w-8 text-black" />
                        : <FaPlay className="h-8 w-8 text-black" />
                    }
                </button>
            </div>

            <div className="flex flex-col">
                <h3>{prettyFileName(metadata.Key)}</h3>
                { collection.artist && <small>{collection.artist}</small> }
            </div>
        </div>
    )
}
