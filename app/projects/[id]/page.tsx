import { usePathname } from 'next/navigation'

export default function ProjectById() {
    const pathname = usePathname();

    return (
        <div>
            <h1>ProjectById Page</h1>
            <p>Project ID: {pathname}</p>
        </div>
    )
}
