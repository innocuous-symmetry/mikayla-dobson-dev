'use client';
import Link from 'next/link'
import { InlineLogo, useColorShift } from './logo'
import { useEffect, useState } from 'react';
import { RxActivityLog } from "react-icons/rx";
import { NavbarButton } from '../ui/Button';

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
        <div onMouseLeave={() => setMobileMenuOpen(false)} className={`flex flex-col z-50 rounded-bl-lg justify-end md:hidden fixed top-24 w-[35vw] text-right place-self-end bg-[#131313] ${mobileMenuOpen ? 'translate-x-[65vw]' : 'translate-x-[100vw]'} transition-all duration-500`}>
            <div className="bg-slate-300 dark:bg-black h-48" />
            <Link onClick={() => setMobileMenuOpen(false)} passHref href="/" className="w-auto px-2">
                <p className='text-lg text-right text-white text-opacity-80 hover:text-opacity-100 uppercase p-2 border-opacity-50 hover:border-opacity-75'>Home</p>
            </Link>

            <Link onClick={() => setMobileMenuOpen(false)} passHref href="/about" className="w-auto px-2">
                <p className='text-lg text-right text-white text-opacity-80 hover:text-opacity-100 uppercase p-2 border-opacity-50 hover:border-opacity-75'>About</p>
            </Link>

            <Link onClick={() => setMobileMenuOpen(false)} passHref href="/projects" className="w-auto px-2">
                <p className='text-lg text-right text-white text-opacity-80 hover:text-opacity-100 hover:border-opacity-75 uppercase p-2 border-opacity-50'>Projects</p>
            </Link>

            <Link onClick={() => setMobileMenuOpen(false)} passHref href="/contact" className="w-auto px-2">
                <p className='text-lg text-right text-white text-opacity-80 hover:text-opacity-100 uppercase p-2 border-opacity-50 hover:border-opacity-75'>Contact</p>
            </Link>
        </div>
        </>
    )
}
