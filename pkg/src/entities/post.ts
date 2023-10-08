export type Post = {
    name: string;
    date: Date;
    author: string;
    description: string;
    body: string;
    tagIDs: string[];
    media?: string[];   // array of URLs
}
