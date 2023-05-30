import Link from 'next/link';

export default function AboutPage() {
    return (
        <div>
            <Link href="/about/me">
                <p>About me</p>
            </Link>

            <Link href="/about/resume">
                <p>My resume</p>
            </Link>

            <Link href="/about/skills">
                <p>Skills</p>
            </Link>

            <Link href="/about/education">
                <p>Education</p>
            </Link>

            <Link href="/about/experience">
                <p>Experience</p>
            </Link>

            <Link href="/about/music">
                <p>Music</p>
            </Link>
        </div>
    )
}
