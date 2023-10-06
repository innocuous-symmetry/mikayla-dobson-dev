import { Project, isProject } from "../entities/project";
import { Client } from "pg";
import createClient from "../services/pg";

export default class ProjectRepository {
    async getProjects() {
        'use server';
        
        const client = createClient();

        const { rows } = await client.query("SELECT * FROM projects");
        await client.end();

        if (rows.every(row => isProject(row))) {
            return rows as Project[];
        }

        return null;
    }

    async getProjectById(id: string) {
        'use server';
        
        const client = createClient();
        const { rows } = await client.query("SELECT * FROM projects WHERE id = $1", [id]);
        await client.end();

        if (rows.every(row => isProject(row))) {
            return rows[0] as Project;
        }

        return null;
    }
}
