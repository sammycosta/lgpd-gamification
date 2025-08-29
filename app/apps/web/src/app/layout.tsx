import Providers from '@/components/providers'
import type { Metadata } from 'next'
import '../index.css'

export const metadata: Metadata = {
  title: 'LGPD Gamificada',
  description: 'LGPD Gamificada'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body>
        <Providers>
          {/* TODO: Header aqui, e tratativas globais */}
          {children}
        </Providers>
      </body>
    </html>
  )
}
