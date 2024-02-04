import { MongoClient } from "mongodb";
import { readFileSync } from "fs";
import { z } from "zod";

async function main() {
    console.log("Preparing seed data...")

    const nodeMajorVersion = parseInt(process.version.split(".")[0].split("v")[1]);
    const nodeMinorVersion = parseInt(process.version.split(".")[1]);

    if (nodeMajorVersion < 20 || (nodeMajorVersion === 20 && nodeMinorVersion < 10)) {
        throw new Error("Database seed depends on Node version 20.10.0 or higher");
    }

    if (!process.env.MONGO_URL) throw new Error("Missing required variable `MONGO_URL` for database connection");
    const connectionString = z.string().url().parse(process.env.MONGO_URL);

    // check if documents and collections exist
    const client = new MongoClient(connectionString, {
        tlsCertificateKeyFile: process.cwd() + "/certs/mongo_cert.pem",
    });

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

        const client = new MongoClient(connectionString, {
            tlsCertificateKeyFile: process.cwd() + "/certs/mongo_cert.pem",
        });

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
    process.exit(0);
}

main();