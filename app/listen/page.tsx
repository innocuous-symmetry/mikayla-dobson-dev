import FullMusicList from "@/components/Music/FullMusicList";
import MusicController from "@/server/controllers/music.controller";
import { Suspense } from "react";

export default async function ListenIndex() {
    let allResults: Awaited<ReturnType<MusicController["getAll"]>>;

    try {
        const controller = new MusicController();
        allResults = await controller.getAll();
    } catch {
        allResults = [];
    }


    return (
        <div>
            <h1>Listen</h1>
            <Suspense fallback={<p>Loading...</p>}>
                <FullMusicList allResults={allResults} />
            </Suspense>
        </div>
    )
}
