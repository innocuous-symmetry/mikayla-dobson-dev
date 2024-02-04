import BlogPostController from "@/server/controllers/blogpost.controller";

export default async function DevLogIndex() {
    let posts: Awaited<ReturnType<BlogPostController["getAll"]>>;

    try {
        const controller = new BlogPostController();
        posts = await controller.getAll();
    } catch {
        posts = [];
    }


    return (
        <div>
            <h1>Dev Log</h1>
            <p>Coming soon...</p>

            { posts?.map((post, idx) => {
                return (
                    <div key={idx}>
                        <a href={`/log/${post._id.toString()}`}>{post.title}</a>
                        <p>{post.author}</p>
                    </div>
                )
            }) ?? null}
        </div>
    )
}
