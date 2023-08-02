import Link from 'next/link';

export default function MusicPage() {
    return (
        <div>
            <Link href="/about/music/projects">
                <p>Projects</p>
            </Link>

            <Link href="/about/music/works">
                <p>Works</p>
            </Link>

            <Link href="/about/music/stream">
                <p>Stream</p>
            </Link>
        </div>
    )
}
