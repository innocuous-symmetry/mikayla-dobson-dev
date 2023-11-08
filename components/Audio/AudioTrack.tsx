'use client';
export function AudioTrack({ src }: { src: string }) {
    return <audio src={src} controls />
}
