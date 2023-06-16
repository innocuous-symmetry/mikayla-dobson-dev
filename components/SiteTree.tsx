'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { v4 } from 'uuid'

export default function SiteTree() {
    const pathname = usePathname()
    const pathAsArray = pathname.split('/').filter(x => x !== '');

    // return (
    //     <div className="flex flex-nowrap w-full">
    //         <Link href="/">
    //             <p className="mx-4">home</p>
    //         </Link>

    //         {pathAsArray.map((segment: string, idx: number) => {
    //             const path = pathAsArray.slice(0, idx + 1).join('/')

    //             return (
    //                 <div key={v4()}>
    //                     <p className="mr-4">/</p>
    //                     <Link href={path}>
    //                         <p className="mr-4">{segment}</p>
    //                     </Link>
    //                 </div>
    //             )
    //         })}
    //     </div>
    // )

    return <></>
}
