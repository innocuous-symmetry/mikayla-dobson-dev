import BlogPostController from "@/server/controllers/blogpost.controller";

export default async function DevLogIndex() {
    const controller = new BlogPostController();
    const posts = await controller.getAll();

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
