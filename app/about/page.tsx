import Link from 'next/link';

export default function AboutPage() {
    return (
        <div>
            <Link href="/about/me">About me</Link>
            <Link href="/about/resume">My resume</Link>
            <Link href="/about/skills">Skills</Link>
            <Link href="/about/education">Education</Link>
            <Link href="/about/experience">Experience</Link>
            <Link href="/about/music">Music</Link>
        </div>
    )
}
