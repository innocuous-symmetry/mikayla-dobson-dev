import { useEffect, useState } from "react";
import { DefaultColors } from "tailwindcss/types/generated/colors";

export type ColorListType = (`bg-${keyof DefaultColors}` | `bg-${keyof DefaultColors}-${string}`);

const colorList: ColorListType[] = [
    "bg-purple-400",
    "bg-purple-700",
    "bg-sky-400",
    "bg-sky-700",
    "bg-blue-400",
    "bg-pink-400",
    "bg-pink-700",
];

const useColorShift = (shiftInterval: number, disableShift = false, customColorList?: ColorListType[]): {
    firstColor: ColorListType | "",
    secondColor: ColorListType | "",
    thirdColor: ColorListType | "",
    handleHover: () => void,
} => {
    if (shiftInterval <= 0) throw new Error("shiftInterval must be greater than 0")

    const [circleColors, setCircleColors] = useState<{
        firstColor: ColorListType | "",
        secondColor: ColorListType | "",
        thirdColor: ColorListType | "",
    }>({
        firstColor: "",
        secondColor: "",
        thirdColor: "",
    })

    function handleHover() {
        const firstColor = colorList[Math.floor(Math.random() * colorList.length | 0)]
        const secondColor = colorList[Math.floor(Math.random() * colorList.length | 0)]
        const thirdColor = colorList[Math.floor(Math.random() * colorList.length | 0)]

        setCircleColors({ firstColor, secondColor, thirdColor });
    }

    // perform initial mount of color changing pattern
    useEffect(disableShift ? handleHover : (() => { return }), []);

    // set this function to repeat
    useEffect(() => {
        const interval = setInterval(() => {
            handleHover();
        }, shiftInterval);

        return () => clearInterval(interval);
    }, [])

    return { ...circleColors, handleHover };
}

export default useColorShift
