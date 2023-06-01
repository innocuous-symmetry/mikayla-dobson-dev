'use client'

import Head from 'next/head'
import Navbar from '@/components/Navbar'
import SiteTree from '@/components/SiteTree'
import { MDXProvider } from '@mdx-js/react'
import { Inter } from 'next/font/google'
import components from '@/components/mdx'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mikayla Dobson | Software Engineer',
  description: 'Integrating artistry and technology to create beautiful software',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
        <MDXProvider components={components}>
          {children}
        </MDXProvider>
      </body>
    </html>
  )
}
