import { AudioGallery } from "@/components/Music/AudioGallery";
import NotFound from "@/components/NotFound";
import MusicController from "@/server/controllers/music.controller";
import { S3Service } from "@/server/s3";
import { TrackWithURL } from "@/server/s3/service";
import { Suspense } from "react";

export default async function ListenByCollectionID({ params }: { params: { collectionid?: string }}) {
    const { collectionid: id } = params;
    if (!id) return <NotFound />

    let collection: Awaited<ReturnType<MusicController["getByID"]>>;
    let trackList: Awaited<ReturnType<typeof S3Service.prepareTrackList>>;
    let thumbnail: TrackWithURL | undefined;

    try {
        const controller = new MusicController();

        collection = await controller.getByID(id);
        if (!collection) return <NotFound />

        trackList = await S3Service.prepareTrackList(collection.pathtoentry);
        thumbnail = trackList.filter(t => t.Key.includes(".png") || t.Key.includes(".jpg") || t.Key.includes(".jpeg"))[0];
    } catch {
        return <NotFound />
    }

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
