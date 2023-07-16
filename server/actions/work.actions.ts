'use server';

import supabaseClient from "../services/supabase";

export default class WorkActions {
    static api = supabaseClient();

    static async getWork() {
        const { data, error } = await this.api.from("work").select("*");

        if (error) throw error;
        return data;
    }

    static async getWorkById(id: string) {
        const { data, error } = await this.api.from("work").select("*").eq("id", id);

        if (error) throw error;
        return data;
    }
}
