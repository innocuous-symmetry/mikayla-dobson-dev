import Link from "next/link"

const Chip = ({ label, href }: { label: string, href?: string }) => (
    href ? (
        <Link
            href={href}
            target="_blank"
            referrerPolicy="no-referrer"
            className="py-0.5 px-2 bg-rose-300 text-black dark:text-white dark:bg-rose-900 rounded-xl m-0.5 hover:bg-rose-500 active:bg-rose-900"
            >
            <p>{label}</p>
        </Link>
    ) : <p className="py-0.5 px-2 bg-rose-300 dark:bg-rose-900 text-black dark:text-white rounded-xl m-0.5">{label}</p>
)

export default Chip
