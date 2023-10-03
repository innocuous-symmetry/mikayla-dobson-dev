import Link from "next/link";
import type { LinkProps } from ".";

export default function SocialMedia({ href, label, logo, disabled = false }: LinkProps) {
    return (
        <div title={label} className="flex flex-col items-center p-8">
            <Link aria-disabled={disabled} passHref href={href}>
                {logo}
            </Link>
        </div>
    )
}
