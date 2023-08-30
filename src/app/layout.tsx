import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { Providers } from '@/app/providers'

import { AOSInit } from '@/app/aos'

import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'IngDesk',
  description:
    'Solução de gerenciamento de relacionamento para empresas e pessoas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
      </head>
      <AOSInit />
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
