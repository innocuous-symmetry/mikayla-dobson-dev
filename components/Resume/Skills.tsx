import { RxChevronDown } from "react-icons/rx";
import Link from "next/link";

const Skills = ({ visible }: { visible: boolean }) => (
    <section className={`w-full transition duration-500 ${visible ? "h-auto opacity-100" : "h-0 opacity-0"}`}>
        <div className="bg-slate-800 shadow shadow-black p-3 my-4 rounded-lg">
            <h3 className="uppercase text-2xl text-rose-600">Strong:</h3>
            <article className="mt-2">
                <details className="group">
                    <summary className="flex items-center text-rose-300 uppercase tracking-wide text-lg mb-2 list-none">
                        <p className="mr-2">JavaScript</p>
                        <RxChevronDown className="transition group-open:rotate-180" />
                    </summary>
                    <div className="opacity-0 group-open:opacity-100 transition-opacity duration-500 flex flex-wrap">
                        <Link target="_blank" referrerPolicy="no-referrer" href="https://github.com/innocuous-symmetry?tab=repositories&language=typescript" className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5 hover:bg-rose-500 active:bg-rose-900">TypeScript</Link>
                        <Link target="_blank" referrerPolicy="no-referrer" href="https://github.com/innocuous-symmetry?tab=repositories&q=react" className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5 hover:bg-rose-500 active:bg-rose-900">React</Link>
                        <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">Next.js</p>
                        <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">tRPC</p>
                        <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">React Query</p>
                        <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">jQuery</p>
                        <Link target="_blank" referrerPolicy="no-referrer" href="https://github.com/innocuous-symmetry?tab=repositories&q=express" className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5 hover:bg-rose-500 active:bg-rose-900">Express</Link>
                        <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">Node.js</p>
                    </div>
                </details>
            </article>

            <article className="mt-2">
                <details className="group">
                    <summary className="flex items-center text-rose-300 uppercase tracking-wide text-lg mb-2 list-none">
                        <p className="mr-2">CSS</p>
                        <RxChevronDown className="transition group-open:rotate-180" />
                    </summary>
                    <div className="opacity-0 group-open:opacity-100 transition-opacity duration-500 flex flex-wrap">
                        <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">Tailwind</p>
                        <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">Bootstrap</p>
                        <Link target="_blank" referrerPolicy="no-referrer" href="https://github.com/innocuous-symmetry/recipe-manager" className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5 hover:bg-rose-500 active:bg-rose-900">Sass</Link>
                        <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">Material UI</p>
                    </div>
                </details>
            </article>
        </div>

        <div className="bg-slate-800 shadow shadow-black p-3 my-4 rounded-lg">
            <h3 className="uppercase text-2xl text-rose-600">Experienced:</h3>
            <article className="mt-2">
                <details className="group">
                    <summary className="flex items-center text-rose-300 uppercase tracking-wide text-lg mb-2 list-none">
                        <p className="mr-2">Python</p>
                        <RxChevronDown className="transition group-open:rotate-180" />
                    </summary>
                    <div className="opacity-0 group-open:opacity-100 transition-opacity duration-500 flex flex-wrap">
                        <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">Flask</p>
                        <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">Flet</p>
                        <Link target="_blank" referrerPolicy="no-referrer" href="https://github.com/innocuous-symmetry/picosynth" className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5 hover:bg-rose-500 active:bg-rose-900">Micropython</Link>
                    </div>
                </details>
            </article>

            <article className="mt-2">
                <details className="group">
                    <summary className="flex items-center text-rose-300 uppercase tracking-wide text-lg mb-2 list-none">
                        <p className="mr-2">Database Operations</p>
                        <RxChevronDown className="transition group-open:rotate-180" />
                    </summary>
                    <div className="opacity-0 group-open:opacity-100 transition-opacity duration-500 flex flex-wrap">
                        <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">PostgreSQL</p>
                        <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">MySQL</p>
                        <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">MongoDB</p>
                        <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">Caching with Redis</p>
                    </div>
                </details>
            </article>

            <article className="mt-2">
                <details className="group">
                    <summary className="flex items-center text-rose-300 uppercase tracking-wide text-lg mb-2 list-none">
                        <p className="mr-2">Tooling</p>
                        <RxChevronDown className="transition group-open:rotate-180" />
                    </summary>
                    <div className="opacity-0 group-open:opacity-100 transition-opacity duration-500 flex flex-wrap">
                        <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">Docker</p>
                        <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">Github Actions</p>
                        <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">Git / Github</p>
                    </div>
                </details>
            </article>
        </div>

        <div className="bg-slate-800 shadow shadow-black p-3 my-4 rounded-lg">
            <h3 className="uppercase text-2xl text-rose-600">Learning:</h3>
            <article className="mt-2">
                <details className="group">
                    <summary className="flex items-center text-rose-300 uppercase tracking-wide text-lg mb-2 list-none">
                        <p className="mr-2">Design Principles</p>
                        <RxChevronDown className="transition group-open:rotate-180" />
                    </summary>
                    <div className="opacity-0 group-open:opacity-100 transition-opacity duration-500 flex flex-wrap">
                        <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">Domain Driven Design</p>
                        <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">Microservices</p>
                        <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">Readable Code</p>
                    </div>
                </details>
            </article>

            <article className="mt-2">
                <details className="group">
                    <summary className="flex items-center text-rose-300 uppercase tracking-wide text-lg mb-2 list-none">
                        <p className="mr-2">Cloud Development and Infrastructure</p>
                        <RxChevronDown className="transition group-open:rotate-180" />
                    </summary>
                    <div className="opacity-0 group-open:opacity-100 transition-opacity duration-500 flex flex-wrap">
                        <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">AWS SDK</p>
                        <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">Proxmox</p>
                        <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">Minio</p>
                        <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">Linux</p>
                    </div>
                </details>
            </article>

            <article className="mt-2">
                <details className="group">
                    <summary className="flex items-center text-rose-300 uppercase tracking-wide text-lg mb-2 list-none">
                        <p className="mr-2">Server-side programming languages</p>
                        <RxChevronDown className="transition group-open:rotate-180" />
                    </summary>
                    <div className="opacity-0 group-open:opacity-100 transition-opacity duration-500 flex flex-wrap">
                        <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">Ruby / Rails</p>
                        <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">Golang</p>
                    </div>
                </details>
            </article>

            <article className="mt-2">
                <details className="group">
                    <summary className="flex items-center text-rose-300 uppercase tracking-wide text-lg mb-2 list-none">
                        <p className="mr-2">Natural Language Processing</p>
                        <RxChevronDown className="transition group-open:rotate-180" />
                    </summary>
                    <div className="opacity-0 group-open:opacity-100 transition-opacity duration-500 flex flex-wrap">
                        <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">NLPT</p>
                        <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">Spacy</p>
                    </div>
                </details>
            </article>
        </div>

        <details className="group bg-slate-800 shadow shadow-black p-3 my-4 rounded-lg">
            <summary className="flex items-center uppercase text-2xl text-rose-600 list-none">
                <p className="mr-2">Soft Skills:</p>
                <RxChevronDown className="transition group-open:rotate-180" />
            </summary>
            <div className="opacity-0 group-open:opacity-100 transition-opacity duration-500 flex flex-wrap">
                <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">Strong communicator</p>
                <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">Fast learner</p>
                <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">Self-driver</p>
                <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">Improviser</p>
                <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">Problem solver</p>
                <p className="py-0.5 px-2 bg-rose-900 rounded-xl m-0.5">Design thinker</p>
            </div>
        </details>
    </section>
);

export default Skills;
