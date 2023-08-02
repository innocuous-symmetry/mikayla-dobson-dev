import { useEffect, useState } from "react";
import { RxTriangleDown } from "react-icons/rx";

interface CompanyShowcaseProps {
    companyName: string
    children: React.ReactNode
}

export default function CompanyShowcase({ companyName, children }: CompanyShowcaseProps) {
    const [collapsed, setCollapsed] = useState(true);

    useEffect(() => console.log(collapsed), [collapsed]);

    return (
        <div className="flex flex-col">
            <div className="flex items-center">
                <h1>{companyName}</h1>
                <div className="transition-transform duration-700 cursor-pointer">
                    <RxTriangleDown className={collapsed ? "" : "rotate-180"} onClick={() => setCollapsed(!collapsed)} />
                </div>
                {/* <button onClick={() => setCollapsed(!collapsed)}>Show more</button> */}
            </div>
            <div className={"flex flex-col"}>
                { collapsed ? <></> : children }
            </div>
        </div>
    )
}
