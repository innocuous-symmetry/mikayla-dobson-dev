import ProjectRepository from "@/server/actions/project.actions"
import Image from "next/image"

export default async function ProjectEntry({ id }: { id: string }) {
    const projects = new ProjectRepository();
    const project = await projects.getProjectById(id);

    if (!project) {
        return <p>Project not found!</p>
    }

    return (
        <article id="project-entry-body">
            <header>
                <h1 className="text-4xl font-bold">{project.name}</h1>
                <p>Started: {project.startDate.toLocaleString()}</p>
                <p>{project.endDate ? `Finished: ${project.endDate.toLocaleDateString()}` : "(In progress)"}</p>
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
