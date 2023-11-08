'use client';

import useAudio from "@/hooks/useAudio";
import { FaArrowDown, FaArrowUp, FaPause, FaPlay } from "react-icons/fa";
import { useCallback } from "react";
import { _Button } from "./_Button";
import Link from "@/components/ui/Link";
import { prettyFileName } from "@/util/helpers";

export default function AudioPlayer() {
    const { isPlaying, isOpen, currentTrack, currentCollection, setIsPlaying, setIsOpen } = useAudio();

    const changePlayState = useCallback(() => {
        if (!currentTrack) {
            setIsPlaying(false);
            return;
        }

        setIsPlaying(!isPlaying);
    }, [currentTrack, isPlaying, setIsPlaying])

    return (
        <>
        <div id="audio-player-panel" className={`${isOpen ? "bg-stone-300 border-black dark:bg-black dark:border-stone-300 text-black dark:text-stone-300 translate-y-0 " : " translate-y-32 "} fixed bottom-0 right-0 flex items-center justify-between w-1/2 h-36 rounded-tl-xl z-0 transition-all duration-700 px-8`}>
            {/* track info, if it is set */}
            <div className="flex flex-col">
                { !isOpen ? null : currentTrack ? (
                    <>
                    <h3>{prettyFileName(currentTrack.Key)}</h3>
                    <p>{currentCollection?.artist ?? "(no artist listed)"} - {currentCollection?.year ?? "(no year listed)"}</p>
                    </>
                ) : (
                    <>
                    <p className="text-white text-opacity-80">No track selected</p>
                    <Link href="/listen">Browse works I have available for streaming!</Link>
                    </>
                )}
            </div>

            <div id="audio-panel-actions" className="flex items-center justify-end pr-16">
                {/* conditionally-rendered button to close audio player once it's open */}
                <_Button extraClasses={"fixed right-28 " + (isOpen ? "-bottom-30" : "bottom-10")} disabled={!currentTrack} onClick={changePlayState}>
                    { isPlaying
                        ? <FaPause className="h-8 w-8 text-black" />
                        : <FaPlay className="h-8 w-8 text-black" />
                    }
                </_Button>
            </div>
        </div>

        {/* floating button to open/close the player */}
        <_Button extraClasses="fixed bottom-10 right-10" onClick={() => setIsOpen(!isOpen)}>
            { isOpen
                ? <FaArrowDown className="h-8 w-8 text-black" />
                : <FaArrowUp className="h-8 w-8 text-black" />
            }
        </_Button>
        </>
    )
}
