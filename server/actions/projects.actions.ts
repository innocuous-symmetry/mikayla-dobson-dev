import supabaseClient from "../services/supabase";

export default class ProjectsActions {
    static api = supabaseClient();

    static async getProjects() {
        const { data, error } = await this.api.from("projects").select("*");

        if (error) throw error;
        return data;
    }

    static async getProjectsById(id: string) {
        const { data, error } = await this.api.from("projects").select("*").eq("id", id);

        if (error) throw error;
        return data;
    }
}
