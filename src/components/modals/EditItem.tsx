import { TextInput, Group, createStyles, Text, Button, Title, FileInput, Modal, Image } from '@mantine/core';
import { Dispatch } from 'react'
import { useForm } from '@mantine/form';
import { BakeryMenuItemTypes, BakeryMenuTypes } from '../../types/types';
import { MenuAction } from '../reducer/Reducer';
import { PencilIcon } from '@heroicons/react/24/outline';
import { useDisclosure } from '@mantine/hooks';
import MenuButton from '../buttons/MenuButton';

type EditItemProps = {
  dispatch: Dispatch<MenuAction>;
  item: BakeryMenuItemTypes;
  menu: BakeryMenuTypes;
}


export default function EditItem({dispatch, item, menu}: EditItemProps) {
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      id: item.id,
      title: item.title,
      ingredient: item.ingredient,
      price: item.price,
      imgSrc: item.imgSrc,
      description: item.description,
    },
  });

  const formKeys = Object.keys(form.values)

  return (
    <>
      <Modal opened={opened} onClose={close} color='brown' centered>
        <Title size='h3' align='center' mb='md'>Отредактируйте блюдо</Title>
       <Text size="md" align='center' mb='md'>
        Здесь можно отредактировать блюдо
       </Text>

      {formKeys.map((item) => {
        if(item === 'id') return null;
        if(item === 'imgSrc') {
          return  <FileInput
          mb='sm' 
          label="Загрузите фото меню" 
          placeholder="Загрузите фото меню" 
          accept="image/png,image/jpeg" 
          {...form.getInputProps('imgSrc')}
          key={item}
          />
        }
        return <TextInput
        key={item}
        label={item} 
        mb='sm'
        placeholder={item}
        {...form.getInputProps(`${item}`)}
        styles={{
          input: {
            "&:focus": {
              border: '1px solid #33859d !important',
              boxShadow: ' 0px 0px 0px 1px #33859d !important',
            }
          }
        }}
      />
      })}


            

      <Group position='center'>
      <Button.Group >
      <Button variant="filled" mr='sm' color='green' onClick={() => {
        if(menu.menu) {
          dispatch({type: 'edit_item', menu: menu, item: form.values})
        }
        close()
      }}>
        Отредактировать
        </Button>

      <Button variant="default" onClick={close}>Не редактровать</Button>
    </Button.Group>
      </Group>

      </Modal>

      <Group position="left">
      <MenuButton type={'edit'} onClick={open} icon={<PencilIcon className="w-6 h-6"/>} color={'white'} />
      </Group>
    </>
  );
}