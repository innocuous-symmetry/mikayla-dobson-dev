import Link from 'next/link'
import { InlineLogo, useColorShift } from '../logo'
import { useEffect, useState } from 'react';
import { UseColorShiftReturnType } from '../logo/useColorShift';

interface HoverState {
    about: boolean
    projects: boolean
    contact: boolean
}

const SHIFT_INTERVAL = 3000;

export default function Navbar() {
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
        <div id="navbar" className="w-full h-auto flex flex-nowrap items-center justify-between px-8 py-4 bg-black text-white">
            <Link href="/">
                <InlineLogo customHookInstance={navbarColorShift} />
            </Link>

            <Link href="/about" onMouseOver={() => mouseOver('about')} onMouseOut={() => mouseOut('about')} className={`${colors.firstColor} rounded-lg transition-colors ease-out duration-${hoverState.about ? '[5000ms]' : '0'}`}>
                <p className='text-lg text-white text-opacity-80 hover:text-opacity-100 uppercase border-white border-2 p-2 rounded-lg border-opacity-50 hover:border-opacity-75'>About</p>
            </Link>

            <Link href="/projects" onMouseOver={() => mouseOver("projects")} onMouseOut={() => mouseOut('projects')} className={`${colors.secondColor} rounded-lg transition-colors ease-out duration-${hoverState.projects ? '[5000ms]' : '0'}`}>
                <p className='text-lg text-white text-opacity-80 hover:text-opacity-100 hover:border-opacity-75 uppercase border-white border-2 p-2 rounded-lg border-opacity-50'>Projects</p>
            </Link>

            <Link href="/contact" onMouseOver={() => mouseOver('projects')} onMouseOut={() => mouseOut('projects')} className={`${colors.thirdColor} rounded-lg transition-colors ease-out duration-${hoverState.contact ? '[5000ms]' : '0'}`}>
                <p className='text-lg text-white text-opacity-80 hover:text-opacity-100 uppercase border-white border-2 p-2 rounded-lg border-opacity-50 hover:border-opacity-75'>Contact</p>
            </Link>
        </div>
    )
}
