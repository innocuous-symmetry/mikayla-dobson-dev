import { AudioGallery } from "@/components/Audio/AudioGallery";
import NotFound from "@/components/NotFound";
import MusicController from "@/server/controllers/music.controller";
import { S3Service } from "@/server/s3";
import { Suspense } from "react";

export default async function ListenByCollectionID({ params }: { params: { collectionid?: string }}) {
    const id = params.collectionid ? Number(params.collectionid) : undefined;
    if (!id) return <NotFound />

    const controller = new MusicController();
    const result = await controller.getByID(id);
    if (!result) return <NotFound />

    // const path = S3Service.asEndpoint(result.pathtoentry);
    const entries = await S3Service.getURLs(result.pathtoentry);
    if (!entries) return <NotFound />

    return (
        <div>
            <header>
                <h1>{result.name}</h1>
                <p>{result.shortdescription}</p>
            </header>

            <p>{result.longdescription}</p>
            <Suspense fallback={<p>Loading...</p>}>
                <AudioGallery urlList={entries} />
            </Suspense>
        </div>
    )
}
