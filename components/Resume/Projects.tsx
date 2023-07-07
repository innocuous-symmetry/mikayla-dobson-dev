const Projects = () => (
    <section className="w-full">
        <article className="bg-slate-800 bg-opacity-40 shadow shadow-black p-3 my-4 rounded-lg">
            <h3 className="uppercase text-2xl text-rose-600">Subsequent</h3>
            <p className="font-light italic text-rose-300">May 2023 - present</p>
            <p>TypeScript, Tone.js</p>

            <div className="h-[1px] w-full my-3 bg-rose-300" />

            <p className="leading-relaxed font-light">A tool for music creators to explore generative music composition. Composed of an engine that wraps around Tone.js, allowing the end user to specify parameters for indefinite generative music output. To be published as an NPM package, including providers to be consumed in front-end web frameworks.</p>
        </article>

        <article className="bg-slate-800 bg-opacity-40 shadow shadow-black p-3 my-4 rounded-lg">
            <h3 className="uppercase text-2xl text-rose-600">Recipin</h3>
            <p className="font-light italic text-rose-300">October 2022 - present</p>
            <p>React, Express, TypeScript, PostgreSQL</p>

            <div className="h-[1px] w-full my-3 bg-rose-300" />

            <p className="leading-relaxed font-light">A full stack web application for storing personal recipes in collections and sharing them in a lightweight social network.</p>
        </article>
    </section>
)

export default Projects
