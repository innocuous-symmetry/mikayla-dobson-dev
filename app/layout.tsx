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

export const metadata = {
  title: 'Mikayla Dobson | Software Engineer',
  description: 'Integrating artistry and technology to create beautiful software',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [bg, setBg] = useState('bg-slate-900');
  const [pageIsScrolled, setPageIsScrolled] = useState(false);

  useEffect(() => {
    switch (pathname) {
      case '/':
        setBg('bg-slate-900');
        break;
      case '/about':
      case '/about/me':
        setBg('bg-purple-950');
        break;
      default:
        setBg('bg-slate-900');
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
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Navbar pageIsScrolled={pageIsScrolled} />
        <SiteTree />
        <IconContext.Provider value={{}}>
          <MDXProvider components={components}>
            <main className={`${bg} min-h-screen`}>
              <div id="navbar-spacer" className="h-[6rem] w-full" />
              {children}
            </main>
          </MDXProvider>
        </IconContext.Provider>
      </body>
    </html>
  )
}
