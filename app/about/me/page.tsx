'use client';
import { useState } from "react";
import Software from "./software.mdx";
import CompanyShowcase from "@/components/About/CompanyShowcase";

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
                    <p>
                        I have been writing software for about three years, and have produced valuable work for several
                        companies working in a variety of paradigms.
                    </p>

                    <p>Here are some traits that my supervisors have consistently praised:</p>
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
