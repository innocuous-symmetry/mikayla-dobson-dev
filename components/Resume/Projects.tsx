import Card from "../ui/Card"

const Projects = () => (
    <section className="w-full">
        <Card>
            <h3 className="uppercase text-2xl text-rose-600">Subsequent</h3>
            <p className="font-light italic text-rose-300">May 2023 - present</p>
            <p className="text-rose-300">TypeScript, Tone.js</p>

            <div className="h-[1px] w-full my-3 bg-rose-600 dark:bg-rose-300" />

            <p className="dark:text-white leading-relaxed font-light">A tool for music creators to explore generative music composition. Composed of an engine that wraps around Tone.js, allowing the end user to specify parameters for indefinite generative music output. To be published as an NPM package, including providers to be consumed in front-end web frameworks.</p>
        </Card>

        <Card>
            <h3 className="uppercase text-2xl text-rose-600">Unbinder</h3>
            <p className="font-light italic text-rose-300">October 2022 - present</p>
            <p className="text-rose-300">ASP.NET</p>

            <div className="h-[1px] w-full my-3 bg-rose-600 dark:bg-rose-300" />

            <p className="dark:text-white leading-relaxed font-light">A full stack web application for storing personal recipes in collections and sharing them in a lightweight social network.</p>
        </Card>
    </section>
)

export default Projects
