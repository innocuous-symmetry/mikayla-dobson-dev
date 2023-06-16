'use client';
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div id="hero" className="min-h-[50vh]">
        <div id="hero-mask" className="bg-gradient-to-b from-black to-slate-900 p-4 flex flex-col min-h-[50vh]">
          <div id="an-avatar-will-go-here" className="h-32" />
          <h1 className="px-4 text-sky-300 text-3xl uppercase">Mikayla Dobson <br />Software Engineer</h1>
          <p className="mt-4 px-4 text-sky-300 tracking-wide font-light">Software design at the confluence of efficiency, ingenuity, and artistry</p>
          <div id="a-backdrop-image-will-go-here" className="h-48" />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-blue-300 text-2xl">Hi! My name is Mikayla.</h2>
        <p className="px-4 sm:px-12">I build full-stack software solutions for the web, answer open-ended questions, and pet cats.</p>

        <div id="actions" className="flex justify-around mt-8">
          <button className="border-white border-[1px] p-2 w-2/5 rounded-md" onClick={() => router.push('/contact')}>
            Tell me what I can do for you
          </button>
          <button className="hidden sm:block border-white border p-2 w-2/5 rounded-md" onClick={() => router.push('/projects')}>
            And check out some of my work while you&apos;re at it
          </button>
          <button className="block sm:hidden border-white border p-2 w-2/5 rounded-md" onClick={() => router.push('/projects')}>
            Check out my projects
          </button>
        </div>
      </div>
    </>
  )
}
