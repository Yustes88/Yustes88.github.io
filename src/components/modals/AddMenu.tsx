import { TextInput, Group, Text, Button, Title, FileInput, Modal } from '@mantine/core';
import { Dispatch } from 'react'
import { useForm } from '@mantine/form';
import { randomId, useDisclosure } from '@mantine/hooks';
import { MenuAction } from '../reducer/Reducer';

type AddMenuProps = {

  dispatch: Dispatch<MenuAction> | undefined;
}

export default function AddMenu({dispatch}: AddMenuProps) {
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
      initialValues: {
        image: '',
        title: '',
        id: randomId(),
        menu: [],
    },
  });

  return (
    <>
      <Modal opened={opened} onClose={close} color='brown' centered>
        <Title size='h3' align='center' mb='md'>Создайте новое меню</Title>
       <Text size="md" align='center' mb='md'>
        Здесь можно создать новое меню
       </Text>

       <TextInput
              withAsterisk
              label="Название"
              placeholder="Название меню"
              {...form.getInputProps('title')}
              styles={{
                input: {
                  "&:focus": {
                    border: '1px solid #33859d !important',
                    boxShadow: ' 0px 0px 0px 1px #33859d !important',
                  }
                }
              }}
            />
  
        <FileInput 
        label="Загрузите фото меню" 
        placeholder="Загрузите фото меню" 
        accept="image/png,image/jpeg" 
        {...form.getInputProps('image')}
        />


            

      <Group position='center'>
      <Button.Group >
      <Button variant="filled" mr='sm' color='green' onClick={() => {
        if(dispatch) {
          dispatch({
            type: 'add_new_menu',
            menu: form.values,
          })
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
          &#43;	Добавить новое меню
          </button>
      </Group>
    </>
  );
}
