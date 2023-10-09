"use client";

import Link from "next/link";
import { Experience, Projects, Skills } from "../../components/Resume";
import { RxChevronDown } from "react-icons/rx";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Card from "@/components/ui/Card";
import ResumeDownloader from "@/components/About/ResumeDownloader";

export default function Resume() {
    const [skillsVisible, setSkillsVisible] = useState(true);
    const [experienceVisible, setExperienceVisible] = useState(true);
    const [educationVisible, setEducationVisible] = useState(true);
    const [projectsVisible, setProjectsVisible] = useState(true);

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-300 to-blue-100 dark:from-black dark:to-slate-900 bg-fixed flex flex-col items-center p-4 z-10">
            <section className="w-full pb-4">
                <h1 className="uppercase text-4xl text-rose-600 dark:text-rose-300 tracking-wide leading-relaxed font-light">Mikayla Dobson</h1>
                <h2 className="text-2xl tracking-wide font-light dark:text-rose-100">Software Engineer | Nashville, TN</h2>

                <div className="hidden bg-slate-950"></div>

                <ResumeDownloader
                    label="Download a copy for later?"
                    paths={["/resume/Mikayla Resume 1023.pdf", "/resume/Mikayla Resume 1023.docx"]}
                />

                <div className="flex pt-2">
                    <Link passHref className="flex items-center dark:text-white mr-8 hover:text-sky-300 active:text-white" href="https://github.com/innocuous-symmetry"><FaGithub className="mr-2" />innocuous-symmetry</Link>
                    <Link passHref className="flex items-center dark:text-white mr-8 hover:text-sky-300 active:text-white" href="https://linkedin.com/in/mikayla-dobson"><FaLinkedin className="mr-2" />mikayla-dobson</Link>
                </div>
            </section>

            <section className="place-self-start mt-8 w-full">
                <button onClick={() => setSkillsVisible(!skillsVisible)} className={"sticky top-[5.5rem] w-full flex items-center px-4 rounded-lg text-rose-500 dark:text-rose-300 uppercase tracking-wide list-none" + (skillsVisible ? " bg-slate-400 dark:bg-black" : "")}>
                    <span className="font-light text-3xl leading-relaxed">Skills</span>
                    <RxChevronDown className={`ml-2 transition ${skillsVisible ? "rotate-180" : "rotate-0"}`} />
                </button>
                { skillsVisible ? <Skills /> : null }
            </section>

            <section className="place-self-start mt-8 w-full">
                <button onClick={() => setExperienceVisible(!experienceVisible)} className={"sticky top-[5.5rem] w-full flex items-center px-4 rounded-lg text-rose-500 dark:text-rose-300 uppercase tracking-wide list-none " + (experienceVisible ? "bg-slate-400 dark:bg-black" : "")}>
                    <span className="font-light text-3xl leading-relaxed">Experience</span>
                    <RxChevronDown className={`ml-2 transition ${experienceVisible ? "rotate-180" : "rotate-0"}`} />
                </button>
                { experienceVisible ? <Experience /> : null }
            </section>

            <section className="place-self-start mt-8 w-full">
                <button onClick={() => setEducationVisible(!educationVisible)} className={"sticky top-[5.5rem] w-full flex items-center px-4 rounded-lg text-rose-500 dark:text-rose-300 uppercase tracking-wide list-none" + (educationVisible ? " bg-slate-400 dark:bg-black" : "")}>
                    <h2 className="font-light text-3xl leading-relaxed">Education</h2>
                    <RxChevronDown className={`ml-2 transition ${educationVisible ? "rotate-0" : "rotate-180"}`} />
                </button>

                {
                    educationVisible ? (
                        <Card>
                            <h3 className="uppercase text-2xl text-rose-600">Southern Methodist University</h3>
                            <p className="font-light italic text-rose-300">Dallas, TX - B.A. Music</p>
                            <div className="h-[1px] w-full my-3 bg-rose-300" />

                            <p className="dark:text-white leading-relaxed font-light">Concentrations in Piano Performance and Music Composition. Special focus on orchestral composition and arranging. Minor in French Language and Culture.</p>
                        </Card>
                    ) : null
                }
            </section>

            <section className="place-self-start mt-8 w-full">
                <button onClick={() => setProjectsVisible(!projectsVisible)} className={"sticky top-[5.5rem] w-full flex items-center px-4 rounded-lg text-rose-500 dark:text-rose-300 uppercase tracking-wide list-none " + (projectsVisible ? " bg-slate-400 dark:bg-black" : "")}>
                    <h2 className="font-light text-3xl leading-relaxed">Projects</h2>
                    <RxChevronDown className={`ml-2 transition ${projectsVisible ? "rotate-180" : "rotate-0"}`} />
                </button>
                { projectsVisible ? <Projects /> : null }
            </section>
        </div>
    )
}
