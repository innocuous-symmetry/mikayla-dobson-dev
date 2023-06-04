'use client'
import { FC } from "react";
import useColorShift, { type ColorListType } from "./useColorShift";
import { useRouter } from "next/navigation";
export { default as useColorShift } from "./useColorShift";

const DEFAULT_SHIFT_INTERVAL = 3000;

interface LogoProps {
    shiftInterval?: number,
    customColorList?: ColorListType[],
    disableShift?: boolean,
}

export const StackedLogo: FC<LogoProps> = ({ shiftInterval, customColorList, disableShift = false }) => {
    const hookProps = [
        shiftInterval ?? DEFAULT_SHIFT_INTERVAL,
        disableShift,
        customColorList,
    ] as const;

    const { firstColor, secondColor, thirdColor, handleHover } = useColorShift(...hookProps);

    return (
        <div id="venn-diagram-logo-container" className="flex w-full h-auto justify-center">
            <div onMouseEnter={handleHover} onMouseOut={handleHover} className={`absolute flex flex-col z-40 items-center justify-center animate-logo-throw-left h-16 w-16 bg-opacity-75 ${firstColor} transition-colors duration-[5000ms] ease rounded-full`}>
                <p className="text-6xl font-bold opacity-100">M</p>
            </div>
            <div onMouseEnter={handleHover} onMouseOut={handleHover} className={`absolute flex flex-col items-center justify-center animate-logo-throw-down h-16 w-16 bg-opacity-75 ${secondColor} transition-colors duration-[5000ms] ease rounded-full`}>
                <p className="text-6xl font-bold opacity-100 z-50">C</p>
            </div>
            <div onMouseEnter={handleHover} onMouseOut={handleHover} className={`absolute flex flex-col items-center justify-center animate-logo-throw-right h-16 w-16 bg-opacity-75 ${thirdColor} transition-colors duration-[5000ms] ease rounded-full`}>
                <p className="text-6xl font-bold opacity-100">D</p>
            </div>
        </div>
    )
}

export const InlineLogo: FC<LogoProps> = ({ shiftInterval, customColorList, disableShift = false }) => {
    const router = useRouter();

    const hookProps = [
        shiftInterval ?? DEFAULT_SHIFT_INTERVAL,
        disableShift,
        customColorList,
    ] as const;

    const { firstColor, secondColor, thirdColor, handleHover } = useColorShift(...hookProps);

    return (
        <button onClick={() => router.push('/')} id="inline-logo-container" className="flex w-auto h-auto justify-center">
            <div onMouseEnter={handleHover} onMouseOut={handleHover} className={`flex flex-col items-center justify-center h-16 w-16 bg-opacity-75 ${firstColor} transition-colors duration-[5000ms] rounded-full`}>
                <p className="text-2xl font-bold opacity-100">M</p>
            </div>

            <div onMouseEnter={handleHover} onMouseOut={handleHover} className={`flex flex-col -ml-3 items-center justify-center h-16 w-16 bg-opacity-75 ${secondColor} transition-colors duration-[5000ms] rounded-full`}>
                <p className="text-2xl font-bold opacity-100">C</p>
            </div>

            <div onMouseEnter={handleHover} onMouseOut={handleHover} className={`flex flex-col -ml-3 items-center justify-center h-16 w-16 bg-opacity-75 ${thirdColor} transition-colors duration-[5000ms] rounded-full`}>
                <p className="text-2xl font-bold opacity-100">D</p>
            </div>
        </button>
    )
}
