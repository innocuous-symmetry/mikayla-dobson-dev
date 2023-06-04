import Link from 'next/link'
import { InlineLogo } from './logo'

export default function Navbar() {
    return (
        <div id="navbar" className="w-full h-auto flex flex-nowrap justify-between px-8 py-4 bg-black text-white">
            <Link href="/">
                <InlineLogo />
            </Link>
            <Link href="/about">
                <p>About</p>
            </Link>
            <Link href="/projects">
                <p>Projects</p>
            </Link>
            <Link href="/contact">
                <p>Contact</p>
            </Link>
        </div>
    )
}
