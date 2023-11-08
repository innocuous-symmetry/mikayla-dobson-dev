type ButtonProps = {
    children: React.ReactNode;
    conditionalExp: string;
    onClick: (...args: []) => void;
    disabled?: boolean
}

export function _Button({ children, conditionalExp, onClick, disabled=false }: ButtonProps) {
    return (
        <button disabled={disabled} onClick={onClick} className={
            conditionalExp + " transition-all duration-700 rounded-full bg-stone-400 border-black h-16 w-16 flex flex-col items-center justify-center"
        }>
            { children }
        </button>
    )
}
