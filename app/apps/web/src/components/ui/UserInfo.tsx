import { useAvatars } from '@/hooks/useAvatars'
import { invalidateUserInfo, useUserInfo } from '@/hooks/useUserInfo'
import { authClient } from '@/lib/auth-client'
import { queryClient, trpc } from '@/utils/trpc'
import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Divider,
  Group,
  Loader,
  Menu,
  Modal,
  Text,
  Tooltip,
  UnstyledButton
} from '@mantine/core'
import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { useState } from 'react'

export const UserInfo = () => {
  const { data: user, isLoading } = useUserInfo()
  const [editProfileOpen, setEditProfileOpen] = useState(false)
  const [deleteAccountOpen, setDeleteAccountOpen] = useState(false)

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

  const openEditProfile = () => setEditProfileOpen(true)
  const closeEditProfile = () => setEditProfileOpen(false)

  const openDeleteAccountOpen = () => setDeleteAccountOpen(true)
  const closeDeleteAccountOpen = () => setDeleteAccountOpen(false)

  const confirmDeleteUser = () => authClient.deleteUser({ callbackURL: '/login' })

  return (
    <Group gap="sm">
      <Menu>
        <Menu.Target>
          <UnstyledButton>
            <Avatar src={`/${user.avatarPath}`} alt="Usuário" radius="xl" size={36} />
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item onClick={openEditProfile}>Editar perfil</Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <Tooltip label="Sair" withArrow>
        <ActionIcon variant="subtle" color="red" radius="xl" size={36} onClick={handleLogout}>
          <LogOut size={20} />
        </ActionIcon>
      </Tooltip>

      <Modal opened={editProfileOpen} onClose={closeEditProfile} title="Editar perfil" centered>
        <EditProfileModalContent onDeleteAccountClick={openDeleteAccountOpen} />
      </Modal>
      <Modal
        opened={deleteAccountOpen}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3
        }}
        onClose={closeDeleteAccountOpen}
        centered
        title="Excluir conta"
      >
        Você tem certeza que deseja realizar essa ação? Isso deletará todos seus dados e progresso
        na ferramenta.
        <Group justify="flex-end" mt="sm">
          <Button variant="outline" color="red" onClick={confirmDeleteUser}>
            Confirmar exclusão de conta
          </Button>
          <Button onClick={closeDeleteAccountOpen}>Cancelar</Button>
        </Group>
      </Modal>
    </Group>
  )
}

const EditProfileModalContent = ({
  onDeleteAccountClick
}: {
  onDeleteAccountClick: () => void
}) => {
  const { data: avatars, isLoading } = useAvatars()

  const [selectedAvatarId, setSelectedAvatarId] = useState<number | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)

  const updateAvatarMutation = useMutation(
    trpc.user.updateAvatar.mutationOptions({
      onSuccess: () => {
        setIsSuccess(true)
        setTimeout(() => setIsSuccess(false), 3000)
        invalidateUserInfo()
      },
      onError: (error) => {
        console.error('Erro ao atualizar avatar:', error.message)
      }
    })
  )

  const handleUpdateUserAvatar = () => {
    if (selectedAvatarId !== null) {
      updateAvatarMutation.mutate({ avatarId: selectedAvatarId })
    }
  }

  if (isLoading) return <Loader />

  return (
    <>
      <Text mb="sm" ff="Outfit, sans-serif">
        Atualizar avatar
      </Text>
      <Group justify="center">
        {avatars?.map(({ id, filePath }) => (
          <Box
            key={id}
            onClick={() => setSelectedAvatarId(id)}
            style={{
              cursor: 'pointer',
              border:
                selectedAvatarId === id
                  ? '3px solid var(--mantine-color-blue-6)'
                  : '3px solid transparent',
              borderRadius: '4px',
              transition: 'border-color 0.2s ease'
            }}
          >
            <Avatar src={`/${filePath}`} size={70} radius="sm" />
          </Box>
        ))}
      </Group>

      <Group justify="flex-end" mt="md">
        <Group>
          {isSuccess && (
            <Text c="green" size="sm" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              ✓ Avatar atualizado!
            </Text>
          )}
          <Button
            onClick={handleUpdateUserAvatar}
            disabled={selectedAvatarId === null || updateAvatarMutation.isPending}
            loading={updateAvatarMutation.isPending}
          >
            Atualizar
          </Button>
        </Group>
      </Group>
      <Divider my="sm" />
      <Text mb="sm" ff="Outfit, sans-serif">
        Outras opções
      </Text>
      <Group>
        <Button variant="outline" color="red" onClick={onDeleteAccountClick}>
          Excluir conta
        </Button>
      </Group>
    </>
  )
}
