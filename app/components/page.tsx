'use client';
import Panel from "@/components/ui/Panel";
import Content from "./content.mdx";

export default function FirstComponent() {
    return (
        <div className="flex flex-col items-center w-full h-full">
            <div className="h-48" />
            <Panel width={"1/2"}>
                <Content />
            </Panel>
        </div>
    )
}
