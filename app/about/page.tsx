import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-[50vh] bg-gradient-to-b from-black to-purple-950">
            <Link href="/about/me">About me</Link>
            <Link href="/about/resume">My resume</Link>
            <Link href="/about/skills">Skills</Link>
            <Link href="/about/education">Education</Link>
            <Link href="/about/experience">Experience</Link>
            <Link href="/about/music">Music</Link>
        </div>
    )
}
