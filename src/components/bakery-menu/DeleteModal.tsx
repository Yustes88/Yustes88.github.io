import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Text, Button, Title } from '@mantine/core';
import { TrashIcon } from '@heroicons/react/24/outline';
import { BakeryMenuTypes } from '../../types/types';
import { Dispatch } from "react";
import { MenuAction } from "../reducer/Reducer";
import MenuButton from '../buttons/MenuButton';

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
        <MenuButton text='Удалить меню' onClick={open} icon={<TrashIcon className="w-6 h-6"/>} color={'red-madder'} colorHover={'red-rusty'} menu={menu.title}/>
      </Group>
    </>
  );
}