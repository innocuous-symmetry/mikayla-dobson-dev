import { z } from "zod";

export type Project = {
    name:           string;
    description:    string;
    created:        Date;
    updated?:       Date;
    tagIDs?:        string[];
    media?:         string[];   // array of URLs
}

export class ProjectCreationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ProjectCreationError";
    }
}

export const ZProject = z.object({
    name: z.string(),
    description: z.string(),
    created: z.date(),
    updated: z.date().optional(),
    tagIDs: z.array(z.string()).optional(),
    media: z.array(z.string()).optional(),
})

export function createProject(data: Partial<Project>) {
    if (!data.name) throw new ProjectCreationError("Project name is required");
    if (!data.description) throw new ProjectCreationError("Project description is required");

    const today = new Date();

    const completeInput = {
        name:           data.name,
        description:    data.description,
        created:        data.created || today,
        updated:        today,
    } satisfies Partial<Project>;

    const parsedProject = ZProject.safeParse(completeInput);

    if (!parsedProject.success) throw new ProjectCreationError("Invalid project data");
    return parsedProject.data satisfies Project;
}

export function isProject(data: unknown): data is Project {
    return ZProject.safeParse(data).success;
}
