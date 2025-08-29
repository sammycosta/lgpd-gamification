import { Container } from '@mantine/core'

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Container size="xl" my="md">
      {children}
    </Container>
  )
}
