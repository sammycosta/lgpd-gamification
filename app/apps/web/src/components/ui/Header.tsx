'use client'
import { authClient } from '@/lib/auth-client'
import { queryClient } from '@/utils/trpc'
import {
  ActionIcon,
  Avatar,
  Container,
  Group,
  Loader,
  Text,
  Tooltip,
  useMantineTheme
} from '@mantine/core'
import { LogOut, Puzzle } from 'lucide-react'
import Link from 'next/link'
import { useUserInfo } from '../../hooks/useUserInfo'

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

const UserInfo = () => {
  const { data: user, isLoading } = useUserInfo()

  const handleLogout = async () => {
    await authClient.signOut()
    queryClient.clear()
  }

  if (isLoading) {
    return <Loader />
  }

  if (!user) {
    return null
  }

  return (
    <Group gap="sm">
      <Tooltip label="Meu perfil" withArrow>
        <Avatar
          src={`/${user.avatarPath}`}
          alt="Usuário"
          radius="xl"
          size={36}
          style={{ cursor: 'pointer' }}
          onClick={() => console.log('Ir para o perfil')}
        />
      </Tooltip>
      <Tooltip label="Sair" withArrow>
        <ActionIcon variant="subtle" color="red" radius="xl" size={36} onClick={handleLogout}>
          <LogOut size={20} />
        </ActionIcon>
      </Tooltip>
    </Group>
  )
}
