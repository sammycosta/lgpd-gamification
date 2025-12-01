import { MantineTheme } from '@mantine/core'
import {
  Book,
  Database,
  FolderSearch,
  Repeat,
  Scale,
  Settings,
  ShieldUser
} from 'lucide-react'

export const getModuleIconProps = (theme: MantineTheme): Record<number, any> => ({
  1: {
    icon: ShieldUser, // Introdução à LGPD
    color: theme.colors.green[4]
  },
  2: {
    icon: Book, // Conceitos Básicos
    color: theme.colors.blue[4]
  },
  3: {
    icon: Settings, // Operações de Tratamento
    color: theme.colors.orange[4]
  },
  4: {
    icon: Scale, // Princípios de Tratamento
    color: theme.colors.violet[4]
  },
  5: {
    icon: FolderSearch, // Inventário de Dados I
    color: theme.colors.teal[4]
  },
  6: {
    icon: Database, // Inventário de Dados II
    color: theme.colors.cyan[4]
  },
  7: {
    icon: Repeat, // Ciclo de Vida do Dado
    color: theme.colors.grape[4]
  }
})
