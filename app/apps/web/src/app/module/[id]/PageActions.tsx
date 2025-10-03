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

interface PageActionsProps {
  moduleId: number
  previousModuleId: number | null
  nextModuleId: number | null
  progressPercentage: number
}

export default function PageActions(props: PageActionsProps) {
  const { moduleId, previousModuleId, nextModuleId, progressPercentage } = props

  const hasNextModule = nextModuleId && progressPercentage >= 70

  const urls = {
    RECOURSES_PAGE: { pathname: `/resources/${moduleId}` },
    PREVIOUS_MODULE: { pathname: `/module/${previousModuleId}` },
    NEXT_MODULE: { pathname: `/module/${nextModuleId}` }
  }

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
        {previousModuleId && (
          <Button
            component={Link}
            href={urls.PREVIOUS_MODULE}
            variant="light"
            leftSection={<ArrowLeft size={16} />}
          >
            Módulo anterior
          </Button>
        )}
        {hasNextModule && (
          <Button
            component={Link}
            href={urls.NEXT_MODULE}
            variant="light"
            rightSection={<ArrowRight size={16} />}
          >
            Próximo módulo
          </Button>
        )}
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
            {previousModuleId && (
              <Menu.Item
                component={Link}
                href={urls.PREVIOUS_MODULE}
                leftSection={<ArrowLeft size={16} />}
              >
                Módulo anterior
              </Menu.Item>
            )}
            {hasNextModule && (
              <Menu.Item
                component={Link}
                href={urls.NEXT_MODULE}
                leftSection={<ArrowRight size={16} />}
              >
                Próximo módulo
              </Menu.Item>
            )}
          </Menu.Dropdown>
        </Menu>
      </Group>
    </Group>
  )
}
