'use client';

import useAudio from "@/hooks/useAudio";
import { FaArrowDown, FaArrowUp, FaPause, FaPlay } from "react-icons/fa";
import { useCallback } from "react";
import { _Button } from "./_Button";
import Link from "@/components/ui/Link";

export default function AudioPlayer() {
    const { isPlaying, isOpen, currentTrack, setIsPlaying, setIsOpen } = useAudio();

    const changePlayState = useCallback(() => {
        if (!currentTrack) {
            setIsPlaying(false);
            return;
        }

        setIsPlaying(!isPlaying);
    }, [currentTrack, isPlaying, setIsPlaying])

    return (
        <div id="audio-player-panel" className={`${isOpen ? "bg-stone-300 border-black dark:bg-black dark:border-stone-300 text-black dark:text-stone-300 " : "bg-opacity-0 "} fixed bottom-0 right-0 flex items-center justify-between w-1/2 h-36 rounded-tl-xl z-0 transition-all duration-700 px-8`}>
            {/* track info, if it is set */}
            <div className="flex flex-col">
                { !isOpen ? null : currentTrack ? (
                    <>
                    <h3>{currentTrack.name}</h3>
                    <p>{currentTrack.artist ?? "(no artist listed)"} - {currentTrack.year ?? "(no year listed)"}</p>
                    </>
                ) : (
                    <>
                    <p className="text-white text-opacity-80">No track selected</p>
                    <Link href="/listen">Browse works I have available for streaming!</Link>
                    </>
                )}
            </div>

            <div id="audio-panel-actions" className="flex items-center justify-end">
                {/* conditionally-rendered button to close audio player once it's open */}
                <_Button disabled={!currentTrack} conditionalExp={isOpen ? "opacity-100 translate-y-0 mr-4 " : "opacity-0 translate-y-32 mr-4 "} onClick={changePlayState}>
                    { isPlaying
                        ? <FaPause className="h-8 w-8 text-black" />
                        : <FaPlay className="h-8 w-8 text-black" />
                    }
                </_Button>

                <_Button onClick={() => setIsOpen(!isOpen)} conditionalExp={isOpen ? "right-36" : "right-12"}>
                    { isOpen
                        ? <FaArrowDown className="h-8 w-8 text-black" />
                        : <FaArrowUp className="h-8 w-8 text-black" />
                    }
                </_Button>
            </div>

        </div>
    )
}
