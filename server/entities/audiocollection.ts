export type Track = {
    name: string;
    date: Date;
    description: string;
}

export type AudioCollection = {
    name: string;
    date: Date;
    tracklist: Track[];
    directory: string;
}
