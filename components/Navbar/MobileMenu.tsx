'use client';
import Link from "next/link";
import { motion, useAnimate } from "framer-motion";
import { useCallback, useEffect } from "react";

type MobileMenuProps = {
    mobileMenuOpen: boolean,
    setMobileMenuOpen: (arg0: boolean) => void
}

export default function MobileMenu({ mobileMenuOpen, setMobileMenuOpen }: MobileMenuProps) {
    // const [scope, animate] = useAnimate();

    // const handleClickout = useCallback((e: MouseEvent) => {
    //     const target = e.target as HTMLElement;
    //     if (target.id !== 'mobile-sidebar') return;

    //     setMobileMenuOpen(false);
    //     animate('-16px', '100%')
    // }, [setMobileMenuOpen, animate]);

    // useEffect(() => {
    //     // handle clickout
    //     document.addEventListener('click', handleClickout)
    //     return () => document.removeEventListener('click', handleClickout);
    // })

    return (
        <motion.div
            // ref={scope}
            id="mobile-sidebar"
            animate={{ x: mobileMenuOpen ? '100%' : '-16px'}}
            onMouseLeave={() => setMobileMenuOpen(false)}
            className={`md:hidden w-1/3 fixed right-0 top-20 flex flex-col p-8 z-50 rounded-xl justify-end bg-[#131313] bg-opacity-90`}>

            <Link onClick={() => setMobileMenuOpen(false)} passHref href="/" className="w-auto px-2">
                <p className='text-lg text-center text-white text-opacity-80 hover:text-opacity-100 hover:bg-[#232323] rounded-xl uppercase p-2 border-opacity-50 hover:border-opacity-75'>Home</p>
            </Link>

            <Link onClick={() => setMobileMenuOpen(false)} passHref href="/about" className="w-auto px-2">
                <p className='text-lg text-center text-white text-opacity-80 hover:text-opacity-100 hover:bg-[#232323] rounded-xl uppercase p-2 border-opacity-50 hover:border-opacity-75'>About</p>
            </Link>

            <Link onClick={() => setMobileMenuOpen(false)} passHref href="/projects" className="w-auto px-2">
                <p className='text-lg text-center text-white text-opacity-80 hover:text-opacity-100 hover:bg-[#232323] rounded-xl hover:border-opacity-75 uppercase p-2 border-opacity-50'>Projects</p>
            </Link>

            <Link onClick={() => setMobileMenuOpen(false)} passHref href="/contact" className="w-auto px-2">
                <p className='text-lg text-center text-white text-opacity-80 hover:text-opacity-100 hover:bg-[#232323] rounded-xl uppercase p-2 border-opacity-50 hover:border-opacity-75'>Contact</p>
            </Link>

        </motion.div>
    )
}
