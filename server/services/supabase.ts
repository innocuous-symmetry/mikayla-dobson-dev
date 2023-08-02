import { createClient } from "@supabase/supabase-js";

export default function supabaseClient() {
    if (typeof process.env.SUPABASE_URL !== "string") {
        throw new Error("SUPABASE_URL is not defined");
    }

    if (typeof process.env.SUPABASE_KEY !== "string") {
        throw new Error("SUPABASE_KEY is not defined");
    }

    return createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
}
