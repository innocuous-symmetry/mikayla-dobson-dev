'use client';
import { MusicStreamingEntry } from "@/server/db/schema";
import { createContext, createRef, useCallback, useContext, useRef, useState } from "react";

type AudioContextType = {
    // boolean properties
    isPlaying: boolean;
    setIsPlaying: (isPlaying: boolean) => void;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;

    // track properties
    /** @deprecated */
    duration: number;
    volume: number;
    setVolume: (volume: number) => void;
    currentTime: number;
    setCurrentTime: (currentTime: number) => void;
    handleTrackChange: (audioSource: string, track: MusicStreamingEntry) => void;

    // identifiers
    currentTrack?: MusicStreamingEntry;
}

const initialContext: AudioContextType = {
    isPlaying: false,
    setIsPlaying: () => {},
    isOpen: false,
    setIsOpen: () => {},
    volume: 0.5,
    setVolume: () => {},
    duration: 0,
    currentTime: 0,
    setCurrentTime: () => {},
    currentTrack: undefined,
    handleTrackChange: () => {},
}

const AudioContext = createContext<AudioContextType>(initialContext);

const AudioProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentTrack, setCurrentTrack] = useState<MusicStreamingEntry>();
    const [audioSource, setAudioSource] = useState<string>();
    const [isPlaying, setIsPlaying] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const audioRef = createRef<HTMLAudioElement>();

    const handleTrackChange = useCallback((audioSource: string, track: MusicStreamingEntry) => {
        setCurrentTrack(track);
        setAudioSource(audioSource);
        setIsPlaying(true);
    }, [])

    return (
        <AudioContext.Provider value={{
            currentTrack, isOpen, isPlaying, volume, duration, currentTime,
            setCurrentTime, setIsOpen, handleTrackChange, setIsPlaying, setVolume
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
