import Link from "next/link";

export function NavbarButton({ href, label, children }: { href: string, label?: string, children?: React.ReactNode }) {
    return (
        <Link passHref href={href} className={`ml-2 rounded-lg`}>
            { label ? (
                <p className='text-lg text-slate-700 dark:text-white text-opacity-80 hover:text-opacity-100 uppercase border-slate-700 dark:border-white border-2 p-2 rounded-lg border-opacity-50 hover:border-opacity-75'>
                    { label }
                </p>
            ) : children ? children : (
                <p className='text-lg text-slate-700 dark:text-white text-opacity-80 hover:text-opacity-100 uppercase border-slate-700 dark:border-white border-2 p-2 rounded-lg border-opacity-50 hover:border-opacity-75'>
                    Button text
                </p>
            )}
        </Link>
    )
}
