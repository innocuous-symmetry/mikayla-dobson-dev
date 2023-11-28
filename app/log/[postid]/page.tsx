import BlogPostController from "@/server/controllers/blogpost.controller";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { notFound } from "next/navigation";

export default async function PostById({ params }: { params: { postid: string }}) {
    const { postid } = params;
    const controller = new BlogPostController();

    console.log({ postid });
    
    const post = await controller.getByID(postid);

    if (!post) notFound();

    const mdxSource = await serialize(post.content);

    return (
        <div>
            <h1>Post {postid}</h1>
            <p>Coming soon...</p>

            <article>
                <h1>{post.title}</h1>
                <p>{post.author}</p>
                { post.written && <p>{post.written.toLocaleDateString()}</p> }

                <hr />

                <MDXRemote {...mdxSource} />
            </article>
        </div>
    )
}
