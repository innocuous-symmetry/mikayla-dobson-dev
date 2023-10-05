type Project = {
    name: string;
    startDate: Date;
    endDate: Date;
    current: boolean;
    description: string;
    tagIDs: string[];
    media?: string[];   // array of URLs
}
