'use client'

import './globals.css'

import Head from 'next/head'
import Navbar from '@/components/Navbar'
import SiteTree from '@/components/SiteTree'
import components from '@/components/mdx'
import { MDXProvider } from '@mdx-js/react'
import { Inter, Besley, Cabin } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { IconContext } from 'react-icons'
import { useEffect, useState } from 'react'

export const inter = Inter({ subsets: ['latin'] })
export const besley = Besley({ subsets: ['latin'] })
export const cabin = Cabin({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [bg, setBg] = useState('bg-slate-400 dark:bg-slate-900');
  const [overlay, setOverlay] = useState(false);

  const [pageIsScrolled, setPageIsScrolled] = useState(false);

  useEffect(() => {
    switch (pathname) {
      case '/contact':
        setBg('bg-darkPlum');
        setOverlay(true);
        break;
      case '/about':
        setBg("bg-blue-100 dark:bg-slate-900");
        setOverlay(false);
        break;
      case '/':
      default:
        setBg('bg-slate-400 dark:bg-slate-900');
        setOverlay(false);
        break;
    }
  }, [pathname])

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setPageIsScrolled(true);
      } else {
        setPageIsScrolled(false);
      }
    })
  }, [])

  return (
    <html lang="en">
      <Head>
        <title>Mikayla Dobson | Software Engineer</title>
        <meta name="description" content="Mikayla Dobson is a software engineer based in Nashville, TN" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Navbar pageIsScrolled={pageIsScrolled} />
        <SiteTree />
        <IconContext.Provider value={{}}>
          <MDXProvider components={components}>
            <main className={`${bg} min-h-screen`}>
              <div id="navbar-spacer" className="h-[6rem] w-full bg-slate-300 dark:bg-black " />
              {children}
            </main>
          </MDXProvider>
        </IconContext.Provider>
      </body>
    </html>
  )
}
