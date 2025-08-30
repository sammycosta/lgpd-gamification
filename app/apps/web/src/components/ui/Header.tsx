'use client'
import {
  ActionIcon,
  Avatar,
  Container,
  Group,
  Text,
  Tooltip
} from '@mantine/core'
import { LogOut, Puzzle } from 'lucide-react'

export default function Header() {
  return (
    <Container size="xl" h="100%">
      <Group h="100%" justify="space-between">
        <Group gap="xs">
          <Puzzle size={22} />
          <Text fw={700} fz={{ base: 'md', sm: 'lg' }}>
            LGPD Gamificada
          </Text>
        </Group>

        <Group gap="sm">
          <Tooltip label="Meu perfil" withArrow>
            <Avatar
              src={null}
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
      </Group>
    </Container>
  )
}
