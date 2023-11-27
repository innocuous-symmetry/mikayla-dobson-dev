import { MongoClient } from "mongodb";
import { readFileSync } from "fs";
import { z } from "zod";

async function main() {
    console.log("Preparing seed data...")

    const connectionString = z.string().safeParse(process.argv[2]).data;

    /** @type {import("./schema").MusicStreamingEntry} */
    const jisei = {
        name: "Jisei",
        shortdescription: "A song about death",
        longdescription: "A song about death",
        artist: "Mikayla Dobson",
        pathtoentry: "/Jisei"
    }

    /** @type {import("./schema").MusicStreamingEntry} */
    const perception = {
        name: "Perception",
        shortdescription: "A song about perception",
        longdescription: "A song about perception",
        artist: "Mikayla Dobson",
        pathtoentry: "/Perception"
    }

    const firstDate = new Date();
    firstDate.setFullYear(2023, 11, 22);

    const secondDate = new Date();
    secondDate.setFullYear(2023, 11, 26);

    /** @type {import("./schema").BlogPost} */
    const logOne = {
        title: "Welcome to My Devlog",
        tags: ["subsequent", "typescript", "devlog", "generative music"],
        written: firstDate,
        posted: secondDate,
        author: "Mikayla Dobson",
        content: readFileSync(process.cwd() + "/seed_data/posts/01.txt", "utf-8"),
    }

    try {
        console.log("Connecting to MongoDB...")

        const client = new MongoClient(connectionString);
        await client.connect();

        const db = client.db("mikayladotdev");
        const music = db.collection("music");
        const blog = db.collection("blog");

        console.log("Seeding data...")

        await music.insertMany([jisei, perception]);
        await blog.insertOne(logOne);

        console.log("Seeding complete! Closing...")
        await client.close();
    } catch (error) {
        console.log({ error });
    }

    console.log("Done!")
}

main();
