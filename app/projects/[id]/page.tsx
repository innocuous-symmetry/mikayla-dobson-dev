// 'use client';
import ProjectRepository from "@/server/actions/project.actions";
import Image from "next/image";

export default async function ProjectById(req: { params: any, searchParams: any }) {
    const projects = new ProjectRepository();
    const project = await projects.getProjectById(req.params.id);

    if (!project) {
        return (
            <div>
                <h1>Project not found!</h1>
            </div>
        )
    }

    return (
        <article id="project-entry-body">
            <header>
                <h1 className="text-4xl font-bold">{project.name}</h1>
                <p>Started: {project.created.toLocaleString()}</p>
                <p>{project.updated ? `Finished: ${project.updated.toLocaleDateString()}` : "(In progress)"}</p>
            </header>

            <div id="project-entry-content" className="flex flex-col">
                <p>{project.description}</p>
            </div>

            { project.media && project.media.map((link, idx) => {
                return <Image src={link} key={idx} alt={`Media for ${project.name}`} width={80} height={80} />
            })}
        </article>
    )
}
