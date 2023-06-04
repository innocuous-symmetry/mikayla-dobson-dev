'use client'
import { useEffect, useState } from "react";
import { DefaultColors } from "tailwindcss/types/generated/colors";

const LOOPING_ENABLED_ON_SECOND_LOGO = true;
const SHIFT_INTERVAL = 3000;

export default function LogoPage() {
    const [circleColors, setCircleColors] = useState<{ [key: string]: typeof colorList[number] | "" }>({
        firstColor: "",
        secondColor: "",
        thirdColor: "",
    })

    const colorList: (`bg-${keyof DefaultColors}` | `bg-${keyof DefaultColors}-${string}`)[] = [
        "bg-purple-400",
        "bg-purple-700",
        "bg-sky-400",
        "bg-sky-700",
        "bg-blue-400",
        "bg-pink-400",
        "bg-pink-700",
    ];

    function handleHover() {
        const firstColor = colorList[Math.floor(Math.random() * colorList.length | 0)]
        const secondColor = colorList[Math.floor(Math.random() * colorList.length | 0)]
        const thirdColor = colorList[Math.floor(Math.random() * colorList.length | 0)]

        setCircleColors({ firstColor, secondColor, thirdColor });
    }

    useEffect(handleHover, []);

    useEffect(() => {
        if (LOOPING_ENABLED_ON_SECOND_LOGO) {
            const interval = setInterval(() => {
                handleHover();
            }, SHIFT_INTERVAL);

            return () => clearInterval(interval);
        }
    }, [])

    return (
        <main>
            <h1>Logo</h1>

            <div id="venn-diagram-logo-container" className="flex w-full h-auto justify-center">
                <div onMouseEnter={handleHover} onMouseOut={handleHover} className={`absolute flex flex-col z-40 items-center justify-center animate-logo-throw-left h-[150px] w-[150px] bg-opacity-75 ${circleColors.firstColor} transition-colors duration-[5000ms] ease rounded-full`}>
                    <p className="text-6xl font-bold opacity-100">M</p>
                </div>
                <div onMouseEnter={handleHover} onMouseOut={handleHover} className={`absolute flex flex-col items-center justify-center animate-logo-throw-down h-[150px] w-[150px] bg-opacity-75 ${circleColors.secondColor} transition-colors duration-[5000ms] ease rounded-full`}>
                    <p className="text-6xl font-bold opacity-100 z-50">C</p>
                </div>
                <div onMouseEnter={handleHover} onMouseOut={handleHover} className={`absolute flex flex-col items-center justify-center animate-logo-throw-right h-[150px] w-[150px] bg-opacity-75 ${circleColors.thirdColor} transition-colors duration-[5000ms] ease rounded-full`}>
                    <p className="text-6xl font-bold opacity-100">D</p>
                </div>
            </div>

            <div id="inline-logo-container" className="flex w-full h-auto justify-center mt-[25rem]">
                <div onMouseEnter={handleHover} onMouseOut={handleHover} className={`flex flex-col items-center justify-center h-[150px] w-[150px] bg-opacity-75 ${circleColors.firstColor} transition-colors duration-[5000ms] rounded-full`}>
                    <p className="text-6xl font-bold opacity-100">M</p>
                </div>

                <div onMouseEnter={handleHover} onMouseOut={handleHover} className={`flex flex-col -ml-8 items-center justify-center h-[150px] w-[150px] bg-opacity-75 ${circleColors.secondColor} transition-colors duration-[5000ms] rounded-full`}>
                    <p className="text-6xl font-bold opacity-100">C</p>
                </div>

                <div onMouseEnter={handleHover} onMouseOut={handleHover} className={`flex flex-col -ml-8 items-center justify-center h-[150px] w-[150px] bg-opacity-75 ${circleColors.thirdColor} transition-colors duration-[5000ms] rounded-full`}>
                    <p className="text-6xl font-bold opacity-100">D</p>
                </div>
            </div>

        </main>
    )
}
