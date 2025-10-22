'use client'
import { ActionIcon, Avatar, Container, Group, Loader, Text, Tooltip } from '@mantine/core'
import { LogOut, Puzzle } from 'lucide-react'
import Link from 'next/link'
import { useUserInfo } from '../../hooks/useUserInfo'

export default function Header() {
  const { data: user, isLoading } = useUserInfo(1)

  return (
    <Container size="xl" h="100%">
      <Group h="100%" justify="space-between">
        <Group gap="xs">
          <Puzzle size={22} />
          <Text fw={700} fz={{ base: 'md', sm: 'lg' }} ff="Outfit, sans-serif">
            <Link href="/">LGPD Gamificada</Link>
          </Text>
        </Group>

        {isLoading ? (
          <Loader />
        ) : (
          <Group gap="sm">
            <Tooltip label="Meu perfil" withArrow>
              <Avatar
                src={`/${user?.avatarPath}`}
                alt="Usuário"
                radius="xl"
                size={36}
                style={{ cursor: 'pointer' }}
                onClick={() => console.log('Ir para o perfil')}
              />
            </Tooltip>

            <Tooltip label="Sair" withArrow>
              <ActionIcon
                variant="subtle"
                color="red"
                radius="xl"
                size={36}
                onClick={() => console.log('Logout')}
              >
                <LogOut size={20} />
              </ActionIcon>
            </Tooltip>
          </Group>
        )}
      </Group>
    </Container>
  )
}
