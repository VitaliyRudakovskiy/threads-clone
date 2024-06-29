import { Metadata } from 'next'
import { FC } from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'

import { ChildrenProps } from '../types'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Threads',
  description: 'Next.js 14 Threads Clone App',
}

const inter = Inter({ subsets: ['latin'] })

const RootLayout: FC<ChildrenProps> = ({ children }) => {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  )
}

export default RootLayout
