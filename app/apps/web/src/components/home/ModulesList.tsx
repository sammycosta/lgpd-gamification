import { Box, Center, rem, Stack, useMantineTheme } from '@mantine/core'
import ModuleCard from './ModuleCard'

// TODO: fazer tipo compartilhado
interface Module {
  id: string | number
  name: string
  icon?: React.ReactNode
  points: number
  maxPoints: number
  locked: boolean
}
interface ModulesListProps {
  modules: Module[]
}

export default function ModulesList({ modules }: ModulesListProps) {
  const theme = useMantineTheme()

  // TODO: Rever melhoria pra isso, talvez receber dados necessários da estrutura do servidor.
  const firstLockedIndex = modules.findIndex((m) => m.locked)
  const activeStep =
    firstLockedIndex === -1 ? modules.length - 1 : firstLockedIndex - 1

  return (
    <Stack gap={0} align="center">
      {modules.map((module, index) => {
        const isCompleted = index <= activeStep
        const lineColor = isCompleted
          ? theme.colors[theme.primaryColor][6]
          : theme.colors.gray[4]

        return (
          <Box key={module.id} w="100%">
            <ModuleCard {...module} />
            {index < modules.length - 1 && (
              <Center>
                <Box
                  style={{
                    width: rem(3),
                    backgroundColor: lineColor,
                    height: rem(50)
                  }}
                />
              </Center>
            )}
          </Box>
        )
      })}
    </Stack>
  )
}
