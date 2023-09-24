import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Litter Critters',
  description: 'Map-based adventure to keep the world litter free!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{width: "100vw", height: "100vh", overflow: "hidden"}}>{children}</body>
    </html>
  )
}
