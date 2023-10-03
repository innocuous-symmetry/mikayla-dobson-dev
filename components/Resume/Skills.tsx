import { RxChevronDown } from "react-icons/rx";
import Link from "next/link";
import Chip from "../ui/Chip";

const Skills = () => (
    <section className="w-full">
        <div id="strong-skills" className="bg-slate-400 dark:bg-slate-800 dark:bg-opacity-40 p-3 my-4 rounded-lg">
            <h3 className="uppercase text-2xl text-rose-600 dark:text-rose-300">Strong:</h3>
            <article className="mt-2">
                <details className="group">
                    <summary className="flex items-center text-rose-600 dark:text-rose-300 uppercase tracking-wide text-lg mb-2 list-none">
                        <p className="mr-2">JavaScript</p>
                        <RxChevronDown className="transition group-open:rotate-180" />
                    </summary>
                    <div className="opacity-0 group-open:opacity-100 transition-opacity duration-500 flex flex-wrap">
                        <Chip label="Typescript" href="https://github.com/innocuous-symmetry?tab=repositories&language=typescript" />
                        <Chip label="React" href="https://github.com/innocuous-symmetry?tab=repositories&q=react" />
                        <Chip label="AWS S3 SDK" />
                        <Chip label="Next.js" />
                        <Chip label="tRPC" />
                        <Chip label="React Query" />
                        <Chip label="jQuery" />
                        <Chip label="Express.js" href="https://github.com/innocuous-symmetry?tab=repositories&q=express" />
                        <Chip label="Node.js" />
                    </div>
                </details>
            </article>

            <article className="mt-2">
                <details className="group">
                    <summary className="flex items-center text-rose-600 dark:text-rose-300 uppercase tracking-wide text-lg mb-2 list-none">
                        <p className="mr-2">CSS</p>
                        <RxChevronDown className="transition group-open:rotate-180" />
                    </summary>
                    <div className="opacity-0 group-open:opacity-100 transition-opacity duration-500 flex flex-wrap">
                        <Chip label="Tailwind" />
                        <Chip label="Bootstrap" />
                        <Chip label="Sass" href="https://github.com/innocuous-symmetry/recipe-manager" />
                        <Chip label="Material UI" />
                    </div>
                </details>
            </article>
        </div>

        <div id="intermediate-skills" className="bg-slate-400 dark:bg-slate-800 dark:bg-opacity-40  p-3 my-4 rounded-lg">
            <h3 className="uppercase text-2xl text-rose-600 dark:text-rose-300">Experienced:</h3>
            <article className="mt-2">
                <details className="group">
                    <summary className="flex items-center text-rose-600 dark:text-rose-300 uppercase tracking-wide text-lg mb-2 list-none">
                        <p className="mr-2">Python</p>
                        <RxChevronDown className="transition group-open:rotate-180" />
                    </summary>
                    <div className="opacity-0 group-open:opacity-100 transition-opacity duration-500 flex flex-wrap">
                        <Chip label="Micropython" href="https://github.com/innocuous-symmetry/picosynth" />
                        <Chip label="Flask" />
                        <Chip label="Flet" />
                    </div>
                </details>
            </article>

            <article className="mt-2">
                <details className="group">
                    <summary className="flex items-center text-rose-600 dark:text-rose-300 uppercase tracking-wide text-lg mb-2 list-none">
                        <p className="mr-2">Database Operations</p>
                        <RxChevronDown className="transition group-open:rotate-180" />
                    </summary>
                    <div className="opacity-0 group-open:opacity-100 transition-opacity duration-500 flex flex-wrap">
                        <Chip label="PostgreSQL" href="https://github.com/innocuous-symmetry/recipe-manager" />
                        <Chip label="MySQL" />
                        <Chip label="MongoDB" href="/about/dropper" />
                        <Chip label="Redis" href="/about/dropper" />
                    </div>
                </details>
            </article>

            <article className="mt-2">
                <details className="group">
                    <summary className="flex items-center text-rose-600 dark:text-rose-300 uppercase tracking-wide text-lg mb-2 list-none">
                        <p className="mr-2">Tooling</p>
                        <RxChevronDown className="transition group-open:rotate-180" />
                    </summary>
                    <div className="opacity-0 group-open:opacity-100 transition-opacity duration-500 flex flex-wrap">
                        <Chip label="Docker" />
                        <Chip label="Github Actions" />
                        <Chip label="Git / Github" />
                    </div>
                </details>
            </article>
        </div>

        <div id="learning-skills" className="bg-slate-400 dark:bg-slate-800 dark:bg-opacity-40  p-3 my-4 rounded-lg">
            <h3 className="uppercase text-2xl text-rose-600 dark:text-rose-300">Learning:</h3>
            <article className="mt-2">
                <details className="group">
                    <summary className="flex items-center text-rose-600 dark:text-rose-300 uppercase tracking-wide text-lg mb-2 list-none">
                        <p className="mr-2">Design Principles</p>
                        <RxChevronDown className="transition group-open:rotate-180" />
                    </summary>
                    <div className="opacity-0 group-open:opacity-100 transition-opacity duration-500 flex flex-wrap">
                        <Chip label="Domain Driven Design" />
                        <Chip label="Microservices" />
                    </div>
                </details>
            </article>

            <article className="mt-2">
                <details className="group">
                    <summary className="flex items-center text-rose-600 dark:text-rose-300 uppercase tracking-wide text-lg mb-2 list-none">
                        <p className="mr-2">Cloud Development and Infrastructure</p>
                        <RxChevronDown className="transition group-open:rotate-180" />
                    </summary>
                    <div className="opacity-0 group-open:opacity-100 transition-opacity duration-500 flex flex-wrap">
                        <Chip label="AWS" />
                        <Chip label="Proxmox" />
                        <Chip label="Minio" />
                        <Chip label="Linux" />
                    </div>
                </details>
            </article>

            <article className="mt-2">
                <details className="group">
                    <summary className="flex items-center text-rose-600 dark:text-rose-300 uppercase tracking-wide text-lg mb-2 list-none">
                        <p className="mr-2">Server-side programming languages</p>
                        <RxChevronDown className="transition group-open:rotate-180" />
                    </summary>
                    <div className="opacity-0 group-open:opacity-100 transition-opacity duration-500 flex flex-wrap">
                        <Chip label="Ruby / Rails" />
                        <Chip label="Golang" />
                    </div>
                </details>
            </article>

            {/* <article className="mt-2">
                <details className="group">
                    <summary className="flex items-center text-rose-600 dark:text-rose-300 uppercase tracking-wide text-lg mb-2 list-none">
                        <p className="mr-2">Natural Language Processing</p>
                        <RxChevronDown className="transition group-open:rotate-180" />
                    </summary>
                    <div className="opacity-0 group-open:opacity-100 transition-opacity duration-500 flex flex-wrap">
                        <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">NLPT</p>
                        <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">Spacy</p>
                    </div>
                </details>
            </article> */}
        </div>

        <details className="group bg-slate-400 dark:bg-slate-800 dark:bg-opacity-40 p-3 my-4 rounded-lg">
            <summary className="flex items-center uppercase text-2xl text-rose-600 dark:text-rose-300 list-none">
                <p className="mr-2">Soft Skills:</p>
                <RxChevronDown className="transition group-open:rotate-180" />
            </summary>
            <div className="opacity-0 group-open:opacity-100 transition-opacity duration-500 flex flex-wrap">
                <Chip label="Strong communicator" />
                <Chip label="Fast learner" />
                <Chip label="Self-driver" />
                <Chip label="Improviser" />
                <Chip label="Problem solver" />
                <Chip label="Design thinker" />
            </div>
        </details>
    </section>
);

export default Skills;
