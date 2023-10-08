import InProgress from "@/components/InProgress";

export default async function ListenIndex() {
    return (
        <div>
            <h1>Listen</h1>
            {/* @ts-ignore server component */}
            <InProgress />
        </div>
    )
}
