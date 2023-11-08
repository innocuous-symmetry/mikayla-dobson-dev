import FullMusicList from "@/components/Music/FullMusicList";
import MusicController from "@/server/controllers/music.controller";
import { Suspense } from "react";

export default async function ListenIndex() {
    const controller = new MusicController();
    const allResults = await controller.getAll();

    return (
        <div>
            <h1>Listen</h1>
            <Suspense fallback={<p>Loading...</p>}>
                <FullMusicList allResults={allResults} />
            </Suspense>
        </div>
    )
}
