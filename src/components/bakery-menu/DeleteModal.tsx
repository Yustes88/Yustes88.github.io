import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Text, Button, Title } from '@mantine/core';
import { TrashIcon } from '@heroicons/react/24/outline';
import { BakeryMenuTypes } from '../../types/types';
import { Dispatch } from "react";
import { MenuAction } from "../reducer/Reducer";

type DeleteModalProps = {
  menu: BakeryMenuTypes,
  dispatch: Dispatch<MenuAction>,
}


export default function ConfirmDeleteModal({menu, dispatch}: DeleteModalProps) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} color='brown' centered>
        <Title size='h3' align='center' mb='md'>Вы хотите удалить меню "{menu.title}"?</Title>
       <Text size="md" align='center' mb='md'>
        После удаления меню "{menu.title}" невозможно будет восстановить
       </Text>

      <Group position='center'>
      <Button.Group >
      <Button variant="filled" mr='sm' color='green' onClick={() => {
        console.log('deleted')
        dispatch({ type: 'delete_menu', payload: menu.id });
        close()
      }}>
        Удалить меню
        </Button>

      <Button variant="default" onClick={close}>Не удалять</Button>
    </Button.Group>
      </Group>

      </Modal>

      <Group position="left">
      <button className="flex items-center gap-x-1 text-red-madder hover:text-red-rusty hover:scale-110 active:text-red-madder active:scale-105 transition-all" onClick={open}>
    <TrashIcon className="w-6 h-6"/>
    <span>Удалить меню &quot;{menu.title}&quot;</span>
</button>
      </Group>
    </>
  );
}