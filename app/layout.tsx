import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Oskars Barber',
  description:
    'Great friendly family barbershop. Barber in the high street of Herne Bay in Kent.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body className={`${geistSans.className}  antialiased`}>
        <Theme accentColor="blue">
          <main>{children}</main>
        </Theme>
      </body>
    </html>
  )
}
