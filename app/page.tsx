import { ColorChangeName } from "@/components/Home";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <div id="hero" className="bg-gradient-to-b from-slate-300 to-slate-400 dark:from-black dark:to-slate-900 p-4 flex flex-col items-end">
        <ColorChangeName />

        {/* <div className="w-full h-[10vh] object-scale-down bg-no-repeat">
          <Image fill src="/backdrops/jean-beller-peW5dg2-cLI-unsplash.jpg" alt="geometric pattern in wood and metal" />
        </div> */}
      </div>

      <div className="flex flex-col items-start">
        <div className="flex flex-col w-full sm:w-2/3 relative mt-6 sm:mt-0 sm:bottom-12 items-center text-center">
          <Link passHref href="/about">
            <Image className="rounded-full my-4" src="/img/profile.jpeg" alt="image of Mikayla Dobson" width={125} height={125} />
          </Link>
          <h2 className="text-slate-700 dark:text-blue-300 text-2xl mb-2">Hi! My name is Mikayla.</h2>
          <p className="px-4 sm:px-12 dark:text-white">I build full-stack software solutions for the web, answer open-ended questions, and pet cats.</p>

          <div id="actions" className="flex justify-around my-8">
            <Link className="flex flex-col items-center justify-center text-center px-4 sm:px-8 border-slate-700 dark:border-white dark:text-white border-[1px] p-2 w-2/5 rounded-md" href="/contact">
              Tell me what I can do for you
            </Link>
            <Link className="hidden sm:flex flex-col items-center justify-center text-center px-8 border-slate-700 dark:border-white dark:text-white border p-2 w-2/5 rounded-md" href="/projects">
              And check out some of my work while you&apos;re at it
            </Link>
            <Link className="sm:hidden flex flex-col items-center justify-center px-4 border-slate-700 dark:border-white dark:text-white border p-2 w-2/5 rounded-md" href="/projects">
              Check out my work
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
