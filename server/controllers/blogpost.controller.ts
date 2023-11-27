import { ZBlogPost } from "../db/schema";
import BaseController from "./base.controller";

export default class BlogPostController extends BaseController<any> {
    constructor() {
        super({
            tableName: "blogposts",
            parser: ZBlogPost.safeParse,
        })
    }
}
