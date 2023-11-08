type ButtonProps = {
    children: React.ReactNode;
    onClick: (...args: []) => void;
    extraClasses?: string;
    disabled?: boolean
}

export function _Button({ children, extraClasses="", onClick, disabled=false }: ButtonProps) {
    return (
        <button disabled={disabled} onClick={onClick} className={
            extraClasses + " transition-all duration-700 rounded-full bg-stone-400 border-black h-16 w-16 flex flex-col items-center justify-center"
        }>
            { children }
        </button>
    )
}
