import { FC, ReactNode } from "react"
import { v4 } from "uuid"
import type { TailwindFraction, TailwindNumber } from "./types"

interface PanelProps {
    children: ReactNode
    width?: TailwindFraction | TailwindNumber | undefined
    height?: TailwindFraction | TailwindNumber | undefined
}

/** @deprecated i kinda hate this */
const Panel: FC<PanelProps> = ({ children, width, height }) => {
    const narrow = (input: TailwindNumber | TailwindFraction | undefined) => {
        if (typeof input === 'number') return input.toString();
        return input ?? "auto";
    }

    return (
        <div
            id={`ui-panel-${v4().slice(0, 6)}`}
            className={`bg-inherit border-white border-2 border-opacity-50 border-double
                drop-shadow-md shadow-white shadow-opacity-25
                w-${narrow(width)} h-${narrow(height)}
                rounded-lg p-3
            `}
        >
            {children}
        </div>
    )
}

export default Panel
