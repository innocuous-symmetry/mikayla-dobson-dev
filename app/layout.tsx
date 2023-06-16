'use client'

import Head from 'next/head'
import Navbar from '@/components/Navbar'
import SiteTree from '@/components/SiteTree'
import { MDXProvider } from '@mdx-js/react'
import { Inter, Besley, Cabin } from 'next/font/google'
import components from '@/components/mdx'
import './globals.css'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { IconContext } from 'react-icons'

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

  useEffect(() => {
    switch (pathname) {
      case '/':
        setBg('bg-slate-900');
        break;
      default:
        setBg('bg-slate-900');
        break;
    }
  }, [pathname])

  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        <SiteTree />
        <IconContext.Provider value={{}}>
          <MDXProvider components={components}>
            <main className={`${bg} min-h-screen`}>
              {children}
            </main>
          </MDXProvider>
        </IconContext.Provider>
      </body>
    </html>
  )
}
