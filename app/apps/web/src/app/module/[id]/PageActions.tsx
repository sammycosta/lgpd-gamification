'use client'

import ButtonGoBack from '@/components/ui/ButtonGoBack'
import { ActionIcon, Button, Group, Menu, Tooltip } from '@mantine/core'
import {
  ArrowLeft,
  ArrowRight,
  EllipsisVertical,
  NotebookText
} from 'lucide-react'
import Link from 'next/link'

export default function PageActions({ id }: { id: string }) {
  const urls = {
    RECOURSES_PAGE: { pathname: `/resources/${id}` },
    PREVIOUS_MODULE: { pathname: `/module/${Number(id) - 1}` },
    NEXT_MODULE: { pathname: `/module/${Number(id) + 1}` }
  }

  // TODO: Verificação de existência de módulos anteriores e próximos.
  return (
    <Group justify="space-between" mb="md">
      <ButtonGoBack url="/" label="Voltar ao início" />
      <Group gap="xs" visibleFrom="xs">
        <Tooltip label="Acessar materiais de apoio">
          <ActionIcon
            component={Link}
            href={urls.RECOURSES_PAGE}
            variant="subtle"
            color="blue"
            aria-label="Acessar materiais de apoio"
            size="lg"
          >
            <NotebookText size={24} />
          </ActionIcon>
        </Tooltip>
        <Button
          component={Link}
          href={urls.PREVIOUS_MODULE}
          variant="light"
          leftSection={<ArrowLeft size={16} />}
        >
          Módulo anterior
        </Button>
        <Button
          component={Link}
          href={urls.NEXT_MODULE}
          variant="light"
          rightSection={<ArrowRight size={16} />}
        >
          Próximo módulo
        </Button>
      </Group>
      <Group hiddenFrom="xs">
        <Menu>
          <Menu.Target>
            <ActionIcon variant="subtle" size="lg">
              <EllipsisVertical size={20} />
            </ActionIcon>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item
              component={Link}
              href={urls.RECOURSES_PAGE}
              leftSection={<NotebookText size={16} />}
            >
              Materiais de apoio
            </Menu.Item>
            <Menu.Item
              component={Link}
              href={urls.PREVIOUS_MODULE}
              leftSection={<ArrowLeft size={16} />}
            >
              Módulo anterior
            </Menu.Item>
            <Menu.Item
              component={Link}
              href={urls.NEXT_MODULE}
              leftSection={<ArrowRight size={16} />}
            >
              Próximo módulo
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </Group>
  )
}
