import type { LinkProps } from ".";
import Image from "next/image";
import Panel from "../ui/Panel";

export default function FeaturedLink({ href, label, logo, disabled = false}: LinkProps) {
    return (
        <Panel width="1/2">
            <div className="flex flex-col items-center p-8">
                {logo}
                <a aria-disabled={disabled} href={href} target="_blank">{label}</a>
            </div>
        </Panel>

    )
}
