'use client'

import ModuleCard from '@/components/home/ModuleCard'
import { SimpleGrid } from '@mantine/core'
import { useState } from 'react'

export default function Home() {
  const [modules, setModules] = useState([
    {
      id: 1,
      name: 'Introdução à LGPD',
      locked: false,
      maxPoints: 100,
      points: 65
    },
    {
      id: 2,
      name: 'Conceitos Básicos',
      locked: true,
      maxPoints: 120,
      points: 0
    }
  ])

  return (
    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg" verticalSpacing="md">
      {modules.map((module) => (
        <ModuleCard key={module.id} {...module} />
      ))}
    </SimpleGrid>
  )
}
