'use client';
import { MusicStreamingEntry } from "@/server/db/schema";
import { TrackWithURL } from "@/server/s3/service";
import { createContext, createRef, useCallback, useContext, useEffect, useRef, useState } from "react";

type AudioContextType = {
    // boolean properties
    isPlaying: boolean;
    setIsPlaying: (isPlaying: boolean) => void;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;

    // track properties
    // duration: number;
    // volume: number;
    // setVolume: (volume: number) => void;
    // currentTime: number;
    // setCurrentTime: (currentTime: number) => void;
    handleTrackChange: (metadata: TrackWithURL, collection: MusicStreamingEntry) => void;

    // identifying data
    currentTrack?: TrackWithURL;
    currentCollection?: MusicStreamingEntry;
    setCurrentCollection: (collection: MusicStreamingEntry) => void;

    // properties
    thumbnailSrc?: string;
    setThumbnailSrc: (src: string) => void;
}

const initialContext: AudioContextType = {
    isPlaying: false,
    setIsPlaying: () => {},
    isOpen: false,
    setIsOpen: () => {},
    // volume: 0.5,
    // setVolume: () => {},
    // duration: 0,
    // currentTime: 0,
    // setCurrentTime: () => {},
    handleTrackChange: () => {},
    currentTrack: undefined,

    currentCollection: undefined,
    setCurrentCollection: () => {},

    thumbnailSrc: undefined,
    setThumbnailSrc: () => {},
}

const AudioContext = createContext<AudioContextType>(initialContext);

const AudioProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentCollection, setCurrentCollection] = useState<MusicStreamingEntry>();
    const [currentTrack, setCurrentTrack] = useState<TrackWithURL>();
    const [audioSource, setAudioSource] = useState<string>();
    const [thumbnailSrc, setThumbnailSrc] = useState<string>();
    const [isPlaying, setIsPlaying] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    // const [volume, setVolume] = useState(0.5);
    // const [duration, setDuration] = useState(0);
    // const [currentTime, setCurrentTime] = useState(0);

    const audioRef = createRef<HTMLAudioElement>();

    const handleTrackChange = useCallback((metadata: TrackWithURL, collection: MusicStreamingEntry) => {
        setCurrentTrack(metadata);
        setAudioSource(metadata.url);
        setCurrentCollection(collection);
        setIsOpen(true);
        setIsPlaying(true);
    }, [])

    useEffect(() => {
        isPlaying ? audioRef.current?.play() : audioRef.current?.pause();
    }, [isPlaying, audioRef])

    return (
        <AudioContext.Provider value={{
            currentTrack, isOpen, isPlaying, currentCollection, thumbnailSrc,
            setIsOpen, handleTrackChange, setIsPlaying, setCurrentCollection, setThumbnailSrc
        }}>
            {children}
            <audio className="hidden" style={{ display: "none" }} ref={audioRef} controls autoPlay={isPlaying} src={audioSource} />
        </AudioContext.Provider>
    )
}

export default function useAudio() {
    return useContext(AudioContext);
}

export { AudioProvider, AudioContext }
export type { AudioContextType }
