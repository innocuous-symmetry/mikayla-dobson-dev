import './globals.css'

import Head from 'next/head'
import Navbar from '@/components/Navbar'
import { Inter, Besley, Cabin } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })
export const besley = Besley({ subsets: ['latin'] })
export const cabin = Cabin({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Mikayla Dobson | Software Engineer</title>
        <meta name="description" content="Mikayla Dobson is a software engineer based in Nashville, TN" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        <div>
          <div id="navbar-spacer" className="h-[6rem] w-full bg-slate-300 dark:bg-black " />
          {children}
        </div>
      </body>
    </html>
  )
}
