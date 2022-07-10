import { useState } from "react";
import { SubTopic } from "./SubTopic";
import { Card } from "@mui/material";
import { v4 } from "uuid";

export function MainTopic({ name, subtopics }) {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <Card className="main-topic">
            <h1>{name}</h1>
            { collapsed ? null : subtopics.map(data => <SubTopic key={v4()} data={data} />) }
            <button onClick={() => setCollapsed(!collapsed)}>{collapsed ? "Show" : "Hide"}</button>
        </Card>
    )
}