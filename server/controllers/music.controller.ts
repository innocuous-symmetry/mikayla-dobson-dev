import { MusicStreamingEntry, ZMusicStreamingEntry } from "../db/schema";
import BaseController from "./base.controller";

export default class MusicController extends BaseController<MusicStreamingEntry> {
    constructor() {
        super({
            tableName: "music",
            parser: ZMusicStreamingEntry.safeParse,
        })
    }
}
