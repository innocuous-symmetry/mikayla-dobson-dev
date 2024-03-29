import SocialMedia from "@/components/Links/SocialMedia";
import { FaBandcamp, FaGithub, FaLinkedin, FaSoundcloud } from "react-icons/fa";

export default async function LinksPage() {
    return (
        <div className="flex flex-col min-h-screen min-w-screen items-center bg-gradient-to-b from-slate-300 to-sky-100 dark:from-black dark:to-slate-900 bg-fixed">
            {/* <section className="flex flex-col flex-wrap w-11/12 m-12">
                <h1 className="text-3xl w-full my-8">Check out my work on...</h1>
                <Panel width="1/2">
                    <div className="flex flex-col items-center p-8">
                        <Image className="mb-8" width={120} height={48} alt="The word 'Dropper' in bold white lettering" src="/dropper.svg" />
                        <a href="https://app.dropper.studio/store/innocuous-symmetry" target="_blank">Dropper</a>
                    </div>
                </Panel>

                <Panel width="1/2">
                    <div className="flex flex-col items-center p-8">
                        <RxArrowRight className="mb-8" />
                        <a href="https://subsequent.media" target="_blank">Subsequent Media</a>
                    </div>
                </Panel>
            </section> */}

            <h1 className="text-3xl w-full text-center mt-16 mb-8 text-indigo-600 dark:text-white">Find me on your favorite corner of the internet:</h1>
            <section id="link-gallery" className="bg-indigo-600 dark:bg-stone-300 w-3/5 my-12 p-6 flex flex-col items-center text-white rounded">

                <div className="flex flex-wrap justify-center w-full">
                    <SocialMedia
                        label="LinkedIn"
                        href="https://www.linkedin.com/in/mikayla-dobson"
                        logo={<FaLinkedin />}
                    />

                    <SocialMedia
                        label="GitHub"
                        href="https://github.com/innocuous-symmetry"
                        logo={<FaGithub />}
                    />

                    <SocialMedia
                        label="SoundCloud"
                        href="https://soundcloud.com/mikaylamusic"
                        logo={<FaSoundcloud />}
                    />

                    <SocialMedia
                        label="Bandcamp"
                        href="https://mikaylaclaire.bandcamp.com/"
                        logo={<FaBandcamp />}
                    />

                    {/* <SocialMedia
                        label="YouTube (coming soon)"
                        href="youtube.com"
                        logo={<FaYoutube />}
                        disabled
                    />

                    <SocialMedia
                        label="Patreon (coming soon)"
                        href="patreon.com"
                        logo={<FaPatreon />}
                        disabled
                    /> */}
                </div>
            </section>
        </div>
    )
}
