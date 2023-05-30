'use client'

import Navbar from '@/components/Navbar'
import { MDXProvider } from '@mdx-js/react'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mikayla Dobson | Software Engineer',
  description: 'Integrating artistry and technology to create beautiful software',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <MDXProvider /* components={components} */>
        <body className={inter.className}>
          <>
          <Navbar />
          {children}
          </>
        </body>
      </MDXProvider>
    </html>
  )
}
