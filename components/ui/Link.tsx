import { default as NextLink } from "next/link";

export default function Link({ children, href }: { children: React.ReactNode, href: string }) {
    return <NextLink className="dark:text-white dark:hover:text-violet-200 dark:active:text-white text-black hover:text-violet-950 active:text-black" href={href}>{children}</NextLink>
}
