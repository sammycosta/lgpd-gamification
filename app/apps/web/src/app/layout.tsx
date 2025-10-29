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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Outfit&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />

        <ColorSchemeScript />
      </head>
      <body>
        <Providers>
          <AppShell
            header={{ height: 60 }}
            padding={{ base: 'sm', xs: 'lg', md: 'xl' }}
            style={{
              background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 50%, #f0f7ff 100%)',
              minHeight: '100vh'
            }}
          >
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
