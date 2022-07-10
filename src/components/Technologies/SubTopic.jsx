import { Card, Chip } from "@mui/material";
import { v4 } from "uuid";

export function SubTopic({ data }) {
    return (
        <Card className="subtopic-card">
            <strong>{data.topic || data}</strong>
            <div className="subtopics">
                { data.subtopics ?
                    data.subtopics.map(each => {
                        return <Chip key={v4()} label={each} />
                    })
                    : null
                }
            </div>
        </Card>
    )
}