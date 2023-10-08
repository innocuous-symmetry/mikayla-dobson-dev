import { Project, isProject } from "../entities/project";
import createClient from "../services/pg";

export default class ProjectRepository {
    async createProject(data: Project) {
        const client = await createClient();
        if (!client) return null;
        await client.connect();

        const { rows } = await client.query(
            "INSERT INTO project (name, description, created, updated) VALUES ($1, $2, $3, $4) RETURNING *"
        , [
            data.name,
            data.description,
            data.created,
            data.updated,
        ]);

        await client.end();

        if (rows.every(row => isProject(row))) {
            return rows[0] as Project;
        }

        return null;
    }

    async getProjects() {
        const client = await createClient();
        if (!client) return null;

        const { rows } = await client.query("SELECT * FROM project");
        await client.end();

        if (rows.every(row => isProject(row))) {
            return rows as Project[];
        }

        return null;
    }

    async getProjectById(id: string) {
        const client = await createClient();
        if (!client) return null;
        await client.connect();

        const { rows } = await client.query("SELECT * FROM project WHERE id = $1", [id]);
        await client.end();

        if (rows.every(row => isProject(row))) {
            return rows[0] as Project;
        }

        return null;
    }
}
