import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Text, Button, Title } from '@mantine/core';
import { TrashIcon } from '@heroicons/react/24/outline';
import { BakeryMenuItemTypes, BakeryMenuTypes } from '../../types/types';
import { Dispatch } from "react";
import { MenuAction } from "../reducer/Reducer";
import MenuButton from '../buttons/MenuButton';

type DeleteModalProps = {
  menu: BakeryMenuTypes | BakeryMenuItemTypes | undefined,
  item?: BakeryMenuItemTypes,
  dispatch: Dispatch<MenuAction> | undefined,
  text: string,
  description: string,
  type: string,
  color: string,
}


export default function ConfirmDeleteModal({menu, item, dispatch, text, description, type, color}: DeleteModalProps) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} color='brown' centered>
        <Title size='h3' align='center' mb='md'>{text} "{type === 'menu' && menu ? menu.title : item?.title}"?</Title>
       <Text size="md" align='center' mb='md'>
        {description}
       </Text>

      <Group position='center'>
      <Button.Group >
      <Button variant="filled" mr='sm' color='green' onClick={() => {
          if(type === 'menu' && dispatch && menu) {
            dispatch({ type: 'delete_menu', menu: menu })
           };
           if(type === 'item' && item && dispatch && menu) {
            dispatch({ type: 'delete_item', menu: menu, item: item })
           }

        close()
      }}>
        Да, удалить
        </Button>

      <Button variant="default" onClick={close}>Не удалять</Button>
    </Button.Group>
      </Group>
      </Modal>

      { 
      menu ? 
      <Group>
      <MenuButton text='Удалить меню' type={type} onClick={open} icon={<TrashIcon className="w-6 h-6"/>} color={color} colorHover={'red-rusty'} menu={menu.title}/>
    </Group> : null
      }
    </>
  );
}