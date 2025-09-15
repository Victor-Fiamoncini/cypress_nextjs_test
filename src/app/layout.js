import { Inter } from 'next/font/google'

import Sidebar from '@/app/components/sidebar/Sidebar'

import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cypress Next.js 15 App',
  description: 'Cypress Next.js 15 App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar />

        {children}
      </body>
    </html>
  )
}
