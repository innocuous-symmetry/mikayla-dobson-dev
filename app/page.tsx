import { ColorChangeName } from "@/components/Home";  
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div id="hero" className="bg-gradient-to-b from-black to-slate-900 p-4 flex flex-col min-h-[50vh]">
        <ColorChangeName />

        {/* <div className="w-full h-[10vh] object-scale-down bg-no-repeat">
          <Image fill src="/backdrops/jean-beller-peW5dg2-cLI-unsplash.jpg" alt="geometric pattern in wood and metal" />
        </div> */}
      </div>

      <div className="flex flex-col items-center pb-24">
        <Link passHref href="/about">
          <Image className="rounded-full mb-4" src="/img/profile.jpeg" alt="image of Mikayla Dobson" width={125} height={125} />
        </Link>
        <h2 className="text-blue-300 text-2xl mb-2">Hi! My name is Mikayla.</h2>
        <p className="px-4 sm:px-12">I build full-stack software solutions for the web, answer open-ended questions, and pet cats.</p>

        <div id="actions" className="flex justify-around mt-8">
          <Link className="flex flex-col items-center justify-center text-center px-4 sm:px-8 border-white border-[1px] p-2 w-2/5 rounded-md" href="/contact">
            Tell me what I can do for you
          </Link>
          <Link className="hidden sm:flex flex-col items-center justify-center text-center px-8 border-white border p-2 w-2/5 rounded-md" href="/projects">
            And check out some of my work while you&apos;re at it
          </Link>
          <Link className="sm:hidden flex flex-col items-center justify-center px-4 border-white border p-2 w-2/5 rounded-md" href="/projects">
            Check out my work
          </Link>
        </div>
      </div>
    </>
  )
}
