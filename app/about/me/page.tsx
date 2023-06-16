'use client';
import { useState } from "react";

export default function AboutMe() {
    const [selected, setSelected] = useState<'musician' | 'developer'>();

    return (
        <div>
            <h1>So, who is Mikayla Dobson?</h1>

            <div>
                <button onClick={() => setSelected('developer')}>Software Engineer</button>
                <button onClick={() => setSelected('musician')}>Musician</button>
            </div>

            {selected === 'developer' && (
                <div>
                    <h2>Software Engineer</h2>
                    <p>
                        I am a software engineer with a passion for creating beautiful, functional, and accessible web applications.
                        I have experience with React, TypeScript, Node.js, and more.
                    </p>
                </div>
            )}

            {selected === 'musician' && (
                <div>
                    <h2>Musician</h2>
                    <p>
                        I am a musician with a passion for creating beautiful, functional, and accessible music.
                        I have experience with the piano, guitar, and more.
                    </p>
                </div>
            )}
        </div>
    )
}
