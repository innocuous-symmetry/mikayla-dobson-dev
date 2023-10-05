import { useEffect, useState } from "react";
import { DefaultColors } from "tailwindcss/types/generated/colors";

export type ColorListType = (`bg-${keyof DefaultColors}` | `bg-${keyof DefaultColors}-${string}` | "");

const colorList: ColorListType[] = [
    "bg-purple-500",
    "bg-purple-800",
    "bg-sky-500",
    "bg-sky-800",
    "bg-blue-500",
    "bg-pink-500",
    "bg-pink-800",
];

export interface UseColorShiftReturnType {
    firstColor: ColorListType
    secondColor: ColorListType
    thirdColor: ColorListType
    shift: () => { firstColor: ColorListType, secondColor: ColorListType, thirdColor: ColorListType }
    shiftInterval: number | undefined
}

const useColorShift = (shiftInterval?: number, disableShift = false, customColorList?: ColorListType[]): UseColorShiftReturnType => {
    if (shiftInterval && shiftInterval <= 0) throw new Error("shiftInterval must be greater than 0")

    const randomColor = () => {
        const list = customColorList ?? colorList;
        const color = list[Math.floor(Math.random() * list.length || 0)];

        if (!color) throw new Error("color is undefined");
        return color;
    }

    const [circleColors, setCircleColors] = useState<{
        firstColor:     ColorListType | "",
        secondColor:    ColorListType | "",
        thirdColor:     ColorListType | "",
    }>({
        firstColor:     colorList[0] ?? randomColor(),
        secondColor:    colorList[1] ?? randomColor(),
        thirdColor:     colorList[2] ?? randomColor(),
    })

    function shift() {
        const firstColor = randomColor();
        const secondColor = randomColor();
        const thirdColor = randomColor();

        setCircleColors({ firstColor, secondColor, thirdColor });
        return { firstColor, secondColor, thirdColor };
    }

    // perform initial mount of color changing pattern
    useEffect(() => {
        if (!disableShift) return;
        shift();
    }, []);

    // set this function to repeat
    useEffect(() => {
        const interval = setInterval(() => {
            shift();
        }, shiftInterval ?? 3000);

        return () => clearInterval(interval);
    }, [])

    return { ...circleColors, shift, shiftInterval };
}

export default useColorShift
