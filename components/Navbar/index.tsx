import Link from 'next/link'
import { InlineLogo, useColorShift } from '../logo'
import { useEffect, useState } from 'react';
import { UseColorShiftReturnType } from '../logo/useColorShift';
import { RxActivityLog } from "react-icons/rx";

interface HoverState {
    about: boolean
    projects: boolean
    contact: boolean
}

const SHIFT_INTERVAL = 3000;

export default function Navbar({ pageIsScrolled = false }) {
    const navbarColorShift = useColorShift(SHIFT_INTERVAL);
    const { shift } = navbarColorShift;

    const [colors, setColors] = useState<Partial<UseColorShiftReturnType>>({
        firstColor: 'bg-inherit',
        secondColor: 'bg-inherit',
        thirdColor: 'bg-inherit',
    });
    const [hoverState, setHoverState] = useState<HoverState>({
        about: false,
        projects: false,
        contact: false,
    })
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    function mouseOver(source: keyof HoverState) {
        const { colorKeys, actualColorReferences, activeIndex } = identifyActiveButton();

        setColors({ ...colors, [colorKeys[activeIndex]]: actualColorReferences[activeIndex] });
        setHoverState({ ...hoverState, [source]: true })
    }

    function mouseOut(source: keyof HoverState) {
        setHoverState({ ...hoverState, [source]: false })
        setColors({ firstColor: 'bg-inherit', secondColor: 'bg-inherit', thirdColor: 'bg-inherit' });
    }

    function identifyActiveButton() {
        const buttonKeys: (keyof HoverState)[] = ['about', 'projects', 'contact'];
        const { firstColor, secondColor, thirdColor } = navbarColorShift;
        const colorKeys = ['firstColor', 'secondColor', 'thirdColor'];
        const actualColorReferences = [firstColor, secondColor, thirdColor];

        const activeButton = buttonKeys.find(key => hoverState[key]);
        const activeIndex = buttonKeys.indexOf(activeButton as keyof HoverState);

        return { colorKeys, actualColorReferences, activeIndex };
    }

    useEffect(() => {
        const interval = setInterval(shift, SHIFT_INTERVAL);
        return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            const { colorKeys, actualColorReferences, activeIndex } = identifyActiveButton();

            for (const key in hoverState) {
                if (hoverState[key as keyof HoverState]) {
                    setColors({
                        ...colors,
                        [colorKeys[activeIndex]]: actualColorReferences[activeIndex]
                    });
                }
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [shift])

    return (
        <>
        <div id="navbar" className={"w-full z-50 fixed flex flex-nowrap items-baseline justify-apart px-8 py-4 " + (mobileMenuOpen ? "bg-[#131313] " : pageIsScrolled ? "bg-black" : "bg-inherit ") + " text-white transition-colors duration-200"}>
            <Link passHref href="/" className="w-1/4">
                <InlineLogo customHookInstance={navbarColorShift} />
            </Link>

            <div className="hidden md:inline-flex justify-end w-3/4">
                <Link passHref href="/about" onMouseOver={() => mouseOver('about')} onMouseOut={() => mouseOut('about')} className={`ml-2 ${colors.firstColor} rounded-lg transition-colors ease-quick-start duration-${hoverState.about ? '[5000ms]' : '0'}`}>
                    <p className='text-lg text-white text-opacity-80 hover:text-opacity-100 uppercase border-white border-2 p-2 rounded-lg border-opacity-50 hover:border-opacity-75'>About</p>
                </Link>

                <Link passHref href="/projects" onMouseOver={() => mouseOver("projects")} onMouseOut={() => mouseOut('projects')} className={`ml-2 ${colors.secondColor} rounded-lg transition-colors ease-quick-start duration-${hoverState.projects ? '[5000ms]' : '0'}`}>
                    <p className='text-lg text-white text-opacity-80 hover:text-opacity-100 hover:border-opacity-75 uppercase border-white border-2 p-2 rounded-lg border-opacity-50'>Projects</p>
                </Link>

                <Link passHref href="/contact" onMouseOver={() => mouseOver('contact')} onMouseOut={() => mouseOut('contact')} className={`ml-2 ${colors.thirdColor} rounded-lg transition-colors ease-quick-start duration-${hoverState.contact ? '[5000ms]' : '0'}`}>
                    <p className='text-lg text-white text-opacity-80 hover:text-opacity-100 uppercase border-white border-2 p-2 rounded-lg border-opacity-50 hover:border-opacity-75'>Contact</p>
                </Link>
            </div>

            <div aria-expanded={mobileMenuOpen} aria-roledescription="mobile-only navbar" className="inline-flex md:hidden justify-end h-full w-3/4">
                <button className={(mobileMenuOpen ? "bg-[#131313]" : "bg-inherit")} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <RxActivityLog size="24" />
                </button>
            </div>
        </div>
        <div onMouseLeave={() => setMobileMenuOpen(false)} className={`flex flex-col z-50 rounded-bl-lg justify-end md:hidden fixed top-24 w-[25vw] text-right place-self-end bg-[#131313] ${mobileMenuOpen ? 'translate-x-[75vw]' : 'translate-x-[100vw]'} transition-all duration-500`}>
            {/* <div className="bg-black h-48" /> */}
            <Link onClick={() => setMobileMenuOpen(false)} passHref href="/" className="w-full">
                <p className='text-lg text-right text-white text-opacity-80 hover:text-opacity-100 uppercase p-2 border-opacity-50 hover:border-opacity-75'>Home</p>
            </Link>

            <Link onClick={() => setMobileMenuOpen(false)} passHref href="/about" className="w-full">
                <p className='text-lg text-right text-white text-opacity-80 hover:text-opacity-100 uppercase p-2 border-opacity-50 hover:border-opacity-75'>About</p>
            </Link>

            <Link onClick={() => setMobileMenuOpen(false)} passHref href="/projects" className="w-full">
                <p className='text-lg text-right text-white text-opacity-80 hover:text-opacity-100 hover:border-opacity-75 uppercase p-2 border-opacity-50'>Projects</p>
            </Link>

            <Link onClick={() => setMobileMenuOpen(false)} passHref href="/contact" className="w-full">
                <p className='text-lg text-right text-white text-opacity-80 hover:text-opacity-100 uppercase p-2 border-opacity-50 hover:border-opacity-75'>Contact</p>
            </Link>
        </div>
        </>
    )
}
