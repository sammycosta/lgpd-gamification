'use client'
import { authClient } from '@/lib/auth-client'
import { Container, Group, Loader, Text, useMantineTheme } from '@mantine/core'
import { Puzzle } from 'lucide-react'
import Link from 'next/link'
import { UserInfo } from './UserInfo'

export default function Header() {
  const { data: session, isPending } = authClient.useSession()

  const theme = useMantineTheme()

  return (
    <Container size="xl" h="100%">
      <Group h="100%" justify="space-between">
        <Group gap="xs">
          <Puzzle size={22} color={theme.colors.blue[7]} />
          <Text fw={700} fz={{ base: 'lg', sm: 'xl' }} ff="Outfit, sans-serif" c="blue.8">
            <Link href={session ? '/' : '/login'}>LGPD Gamificada</Link>
          </Text>
        </Group>
        {isPending ? <Loader /> : session && <UserInfo />}
      </Group>
    </Container>
  )
}
