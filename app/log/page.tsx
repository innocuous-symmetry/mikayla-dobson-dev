import BlogPostController from "@/server/controllers/blogpost.controller";

export default async function DevLogIndex({ query }: { query: { category?: string }}) {
    const { category } = query;
    const controller = new BlogPostController();
    const posts = await controller.getAll();

    return (
        <div>
            <h1>Dev Log</h1>
            <p>Coming soon...</p>

            { category ? <p>Searching by category {category}</p> : null }
            { posts?.map((post, idx) => {
                return (
                    <div key={idx}>
                        <a href={`/log/${post._id.toHexString()}`}>{post.title}</a>
                        <p>{post.author}</p>
                    </div>
                )
            }) ?? null}
        </div>
    )
}
