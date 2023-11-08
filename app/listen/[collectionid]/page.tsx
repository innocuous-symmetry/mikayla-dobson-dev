import { AudioGallery } from "@/components/Music/AudioGallery";
import NotFound from "@/components/NotFound";
import MusicController from "@/server/controllers/music.controller";
import { S3Service } from "@/server/s3";
import { Suspense } from "react";

export default async function ListenByCollectionID({ params }: { params: { collectionid?: string }}) {
    const id = params.collectionid ? Number(params.collectionid) : undefined;
    if (!id) return <NotFound />

    const controller = new MusicController();
    const collection = await controller.getByID(id);
    if (!collection) return <NotFound />

    const trackList = await S3Service.prepareTrackList(collection.pathtoentry);

    return (
        <div>
            <header>
                <h1>{collection.name}</h1>
                <p>{collection.shortdescription}</p>
            </header>

            <p>{collection.longdescription}</p>
            <Suspense fallback={<p>Loading...</p>}>
                <AudioGallery trackList={trackList} collection={collection} />
            </Suspense>
        </div>
    )
}
