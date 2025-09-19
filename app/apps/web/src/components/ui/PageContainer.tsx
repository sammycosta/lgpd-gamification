import { Container } from '@mantine/core'

export default function PageContainer({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Container size="xl" my="md" p={0}>
      {children}
    </Container>
  )
}
