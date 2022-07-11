import { useState } from "react"

export function AboutSection({ data }) {
    const [visible, setVisible] = useState(false);
    
    return (
        <section className="about-me-section">
            <div className="am-section-mini">
                <h1 className="am-header">{data.title}</h1>
                <button onClick={() => setVisible(!visible)}>{visible ? "Hide" : "Show"}</button>
            </div>
            { visible && data.jsx }
        </section>
    )
}