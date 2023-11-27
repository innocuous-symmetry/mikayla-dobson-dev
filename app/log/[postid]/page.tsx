import BlogPostController from "@/server/controllers/blogpost.controller";
import Image from "next/image";

export default async function PostById({ params }: { params: { postid: string }}) {
    const { postid } = params;
    const controller = new BlogPostController();
    const post = await controller.getByID(postid);

    return (
        <div>
            <h1>Post {postid}</h1>
            <p>Coming soon...</p>

            { post && (
                <article>
                    <h2>{post.title}</h2>
                    <p>{post.author}</p>
                    <p>{post.posted.toDateString()}</p>
                    { post.updated ? <p>{post.updated.toDateString()}</p> : null }

                    { post.images && post.images.map((src, idx) => (
                        <Image key={idx} src={src} alt={`attached media for post ${post.title}`} />
                    ))}

                    <hr />

                    <p>{post.content}</p>

                    <div id="category-list">
                        { post.tags?.map((tag, idx) => {
                            return (
                                <div key={idx}>
                                    <a href={`/log?category=${tag}`}>{tag}</a>
                                </div>
                            )
                        })}
                    </div>
                </article>
            )}

        </div>
    )
}
