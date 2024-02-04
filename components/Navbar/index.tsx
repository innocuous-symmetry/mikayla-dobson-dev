'use client';
import Link from 'next/link'
import { InlineLogo, useColorShift } from './logo'
import { useEffect, useState } from 'react';
import { RxActivityLog } from "react-icons/rx";
import { NavbarButton } from '../ui/Button';
import useAudio from '@/hooks/useAudio';
import AudioPlayer from '../Music/AudioPlayer/index';
import MobileMenu from './MobileMenu';

const SHIFT_INTERVAL = 3000;

export default function Navbar() {
    const navbarColorShift = useColorShift(SHIFT_INTERVAL);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [pageIsScrolled, setPageIsScrolled] = useState(false);

    useEffect(() => {
        document.addEventListener('scroll', () => {
          if (window.scrollY > 0) {
            setPageIsScrolled(true);
          } else {
            setPageIsScrolled(false);
          }
        })
    }, [])

    return (
        <>
        <div
            id="navbar"
            className={`
                w-full z-50 fixed flex flex-nowrap items-baseline justify-apart px-8 py-4
                ${pageIsScrolled ? "bg-slate-300 dark:bg-black " : "bg-inherit "}
                text-white transition-all duration-200`
            }>
            <Link passHref href="/" className="w-1/4">
                <InlineLogo customHookInstance={navbarColorShift} />
            </Link>

            <div className="hidden md:inline-flex justify-end w-3/4">
                <NavbarButton   href="/about"     label="About"       />
                <NavbarButton   href="/projects"  label="Projects"    />
                <NavbarButton   href="/read"      label="Read"        />
                <NavbarButton   href="/listen"    label="Listen"      />
                <NavbarButton   href="/links"     label="Links"       />
                <NavbarButton   href="/contact"   label="Contact"     />
            </div>

            <div aria-expanded={mobileMenuOpen} aria-roledescription="mobile-only navbar" className="inline-flex md:hidden justify-end h-full w-3/4">
                <button className={(mobileMenuOpen ? "bg-[#131313]" : "bg-inherit")} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <RxActivityLog size="24" />
                </button>
            </div>
        </div>

        <MobileMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        <AudioPlayer />
        </>
    )
}
