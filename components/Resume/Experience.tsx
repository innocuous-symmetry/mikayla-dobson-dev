import Link from "next/link";
import Card from "../ui/Card";

const Experience = () => {
    return (
        <section className="w-full">
            <Card>
                <Link target="_blank" referrerPolicy="no-referrer" href="https://dropper.studio" className="uppercase text-2xl text-rose-600 hover:text-rose-400 active:text-rose-600">Dropper Studio</Link>
                <p className="font-light italic text-black dark:text-rose-300">Nashville, TN (hybrid) - Software Engineer</p>
                <p className="dark:text-white">March 2023 - present</p>

                <div className="h-[1px] w-full my-3 bg-rose-600 dark:bg-rose-300" />

                <p className="dark:text-white leading-relaxed font-light">Building a full-stack e-commerce platform for the music industry. Experience includes: producing a functional proof of concept from design specifications; constructing a scalable, performant full-stack architecture; and project/team management skills.</p>

                <Link href="/about/work/dropper" className="text-rose-600 hover:text-rose-400 active:text-rose-300">Learn more about my work with Dropper</Link>
            </Card>

            <Card>
                <Link target="_blank" referrerPolicy="no-referrer" href="https://dization.com/" className="uppercase text-2xl text-rose-600 hover:text-rose-400 active:text-rose-600">Dization, Inc.</Link>
                <p className="font-light italic text-black dark:text-rose-300">Pittsburgh, PA (remote) - Software Engineer (intern)</p>
                <p className="dark:text-white">October 2022 - March 2023</p>

                <div className="h-[1px] w-full my-3 bg-rose-600 dark:bg-rose-300" />

                <p className="dark:text-white leading-relaxed font-light">Participated in the development of an enterprise project management solution. Built several new features, contributed to design and UX discussions, and took initiative on debugging efforts. Technologies included PHP, MySQL, jQuery, and Bootstrap.</p>

                <Link href="/about/work/dization" className="text-rose-600 hover:text-rose-400 active:text-rose-300">Learn more about my work with Dization</Link>
            </Card>

            <Card>
                <h3 className="uppercase text-2xl text-rose-600">Metazu Studio</h3>
                <p className="font-light italic text-black dark:text-rose-300">Nashville, TN (hybrid) - Software Engineer (consultant)</p>
                <p className="dark:text-white">March 2022 - December 2022</p>

                <div className="h-[1px] w-full my-3 bg-rose-600 dark:bg-rose-300" />

                <p className="dark:text-white leading-relaxed font-light">Consulted on small teams for the design and engineering of full-stack web applications for clients. Used technologies including Node.js, React, MongoDB, and PostgreSQL.</p>
            </Card>

            <Link href="/about/work" className="text-rose-300 hover:text-rose-500 active:text-rose-300 bg-slate-950 p-2 rounded-lg shadow-lg">See more about my experience</Link>
        </section>
    )
}

export default Experience;
