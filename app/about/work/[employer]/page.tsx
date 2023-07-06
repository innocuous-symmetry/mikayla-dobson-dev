'use client';
import { usePathname } from "next/navigation";

export default function ExperiencePage() {
    const path = usePathname();

    return (
        <div>
            <div id="spacer" className='h-[6rem] w-full' />
            <h1>Work Page</h1>
            <p>Employer: {path.split('/').at(-1)}</p>
        </div>
    )
}
