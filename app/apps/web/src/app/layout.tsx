import Providers from '@/components/providers'
import Header from '@/components/ui/Header'
import PageContainer from '@/components/ui/PageContainer'
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  ColorSchemeScript,
  mantineHtmlProps
} from '@mantine/core'
import '@mantine/core/styles.css'
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
    <html lang="pt-br" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <Providers>
          <AppShell header={{ height: 60 }} padding="md">
            <AppShellHeader>
              <Header />
            </AppShellHeader>
            <AppShellMain>
              <PageContainer>{children}</PageContainer>
            </AppShellMain>
          </AppShell>
        </Providers>
      </body>
    </html>
  )
}
