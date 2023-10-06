import { z } from "zod";

export type Project = {
    name:           string;
    description:    string;
    startDate:      Date;
    endDate?:       Date;
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
    startDate: z.date(),
    endDate: z.date().optional(),
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
        startDate:      data.startDate || today,
    }

    const parsedProject = ZProject.safeParse(completeInput);

    if (!parsedProject.success) throw new ProjectCreationError("Invalid project data");
    return parsedProject.data satisfies Project;
}

export function isProject(data: unknown): data is Project {
    return ZProject.safeParse(data).success;
}
