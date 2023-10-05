import Link from "next/link";
import type { LinkProps } from ".";

export default function SocialMedia({ href, label, logo, disabled = false }: LinkProps) {
    return (
        <div title={label} className="text-white dark:text-black w-1/4 p-8 m-8 rounded-lg border border-white dark:border-black dark:border-opacity-20">
            <Link className="flex flex-col items-center md:hidden" aria-disabled={disabled} passHref href={href}>
                {logo}
            </Link>

            <Link aria-disabled={disabled} passHref href={href} className="hidden md:flex flex-col items-center justify-start">
                <>
                <span className="text-3xl">{ logo }</span>
                <p className="text-xl font-bold mt-4">{label}</p>
                </>
            </Link>
        </div>
    )
}
