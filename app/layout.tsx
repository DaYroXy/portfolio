import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AosProvider from './AOSProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DaYroXy - Porfolio Software Engineer and Cybersecurity Expertise',
  description: "Explore DaYroXy's Portfolio showcasing cutting-edge Web Development and Cybersecurity solutions. Innovative, Professional, and Secure",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AosProvider>
          {children}
        </AosProvider>
      </body>
    </html>
  )
}
