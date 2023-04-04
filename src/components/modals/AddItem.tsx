import { TextInput, Group, Text, Button, Title, FileInput, Modal, Image } from '@mantine/core';
import { Dispatch } from 'react'
import { useForm } from '@mantine/form';
import {  BakeryMenuTypes } from '../../types/types';
import { MenuAction } from '../reducer/Reducer';
import { randomId, useDisclosure } from '@mantine/hooks';

type EditItemProps = {
  dispatch: Dispatch<MenuAction>;
  menu: BakeryMenuTypes;
}


export default function AddItem({dispatch, menu}: EditItemProps) {
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      id: randomId(),
      title: '',
      ingredient: [],
      price: 0,
      imgSrc: '',
      description: '',
    },
  });

  const formKeys = Object.keys(form.values)

  return (
    <>
      <Modal opened={opened} onClose={close} color='brown' centered>
        <Title size='h3' align='center' mb='md'>Отредактируйте блюдо</Title>
       <Text size="md" align='center' mb='md'>
        Здесь можно создать новое блюдо
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
          dispatch({
            type: 'add_new_item', menu: menu, item: form.values})
        }
        close()
      }}>
        Сохранить
        </Button>

      <Button variant="default" onClick={close}>Не сохранять</Button>
    </Button.Group>
      </Group>

      </Modal>

      <Group position="left">
      <button className="hover:scale-110 active:scale-105 transition-all" onClick={open}>
          &#43;	Добавить новое блюдо
          </button>
      </Group>
    </>
  );
}