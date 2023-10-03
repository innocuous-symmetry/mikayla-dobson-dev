import Link from "next/link";

export function NavbarButton({ href, label, children }: { href: string, label?: string, children?: React.ReactNode }) {
    return (
        <Link passHref href={href} /* onMouseOver={() => mouseOver('about')} onMouseOut={() => mouseOut('about')} */ className={`ml-2 ${/* colors.firstColor */ ''} rounded-lg transition-colors ease-quick-start duration-${/* hoverState.about ? '[5000ms]' : */ '0'}`}>
            { label ? (
                <p className='text-lg text-white text-opacity-80 hover:text-opacity-100 uppercase border-white border-2 p-2 rounded-lg border-opacity-50 hover:border-opacity-75'>
                    { label }
                </p>
            ) : children ? children : (
                <p className='text-lg text-white text-opacity-80 hover:text-opacity-100 uppercase border-white border-2 p-2 rounded-lg border-opacity-50 hover:border-opacity-75'>
                    Button text
                </p>
            )}
        </Link>
    )
}
