import Link from 'next/link';

export default function MusicWorksPage() {
    return (
        <div>
            <h1>Music Works Page</h1>

            <Link href="/about/music/works/1">
                <p>First</p>
            </Link>

            <Link href="/about/music/works/2">
                <p>Second</p>
            </Link>

            <Link href="/about/music/works/3">
                <p>Third</p>
            </Link>
        </div>
    )
}
