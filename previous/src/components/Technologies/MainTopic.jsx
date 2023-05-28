import { useState } from "react";
import { SubTopic } from "./SubTopic";
import { Card, Chip } from "@mui/material";
import { v4 } from "uuid";

export function MainTopic({ name, subtopics }) {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <Card className="main-topic" elevation={2}>
            <h1>{name}</h1>
            <div className="subtopic-container">
                {
                    collapsed || subtopics.map(inner => {
                        return (
                            inner.subtopics ?
                            <SubTopic key={v4()} data={inner} />
                            : <Chip key={v4()} label={inner} />
                        )
                    })
                }
            </div>
            <button onClick={() => setCollapsed(!collapsed)}>{collapsed ? "Show" : "Hide"}</button>
        </Card>
    )
}