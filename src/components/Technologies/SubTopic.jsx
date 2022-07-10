import { Card, Chip } from "@mui/material";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

export function SubTopic({ data }) {
    const [contents, setContents] = useState();

    useEffect(() => {
        setContents(() => {
            if (data.subtopics.length) {
                return data.subtopics.map(each => <Chip key={v4()} label={each} />);
            } else {
                return <p>In progress!</p>
            }
        })
    }, []);

    return (
        <Card className="subtopic-card" elevation={5}>
            <strong>{data.topic}</strong>
            <div className="subtopics">
                {contents}
            </div>
        </Card>
    )
}