'use client';

import { useColorShift } from "../logo";

export const ColorChangeName = () => {
    const { firstColor, secondColor, thirdColor } = useColorShift(14000);

    return (
        <>
        <span className={"px-4 mb-2 mt-4 bg-clip-text text-transparent uppercase text-3xl sm:text-6xl font-extrabold bg-opacity-100 animate-text-gradient bg-gradient-to-r " + `from-${firstColor.split('-').slice(1).join('-')} to-${secondColor.split('-').slice(1).join('-')}`}>
          Mikayla Dobson
        </span>
        <h2 className={"px-4 uppercase text-2xl text-transparent font-bold bg-opacity-100 animate-text-gradient bg-clip-text bg-gradient-to-r " + `from-${secondColor.split('-').slice(1).join('-')} to-${thirdColor.split('-').slice(1).join('-')}`}>Software Engineer</h2>

        <div id="hero-mask" className="bg-inherit bg-opacity-10 p-4 flex flex-col">
          <p className="mt-4 text-right text-slate-700 dark:text-sky-300 tracking-wide">Pragmatic software design with style and artistry.</p>
        </div>
        </>
    )
}
