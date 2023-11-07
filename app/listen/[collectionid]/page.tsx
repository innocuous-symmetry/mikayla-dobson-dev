import NotFound from "@/components/NotFound";
import MusicController from "@/server/controllers/music.controller";
import { MusicStreamingEntry } from "@/server/db/schema";
import { S3Service } from "@/server/s3";
import { Suspense } from "react";

export default async function ListenByCollectionID({ params }: { params: { collectionid?: string }}) {
    const id = params.collectionid ? Number(params.collectionid) : undefined;
    if (!id) return <NotFound />

    const controller = new MusicController();
    const result = await controller.getByID(id);
    if (!result) return <NotFound />

    console.log(result);
    const entries = await S3Service.getURLs(result.pathToEntry);

    return (
        <div>
            <Suspense fallback={<p>Loading...</p>}>
                <header>
                    <h1>{result.name}</h1>
                    <p>{result.shortDescription}</p>
                </header>

                <p>{result.longDescription}</p>

                <section>
                    { entries
                        ? entries.map((entry: string, idx: number) => <p key={idx}>{entry}</p>)
                        : <p>No entries found</p>
                    }
                </section>
            </Suspense>
        </div>
    )
}
