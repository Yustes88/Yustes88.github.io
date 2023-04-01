import { TextInput, Group, createStyles, Text, Button, Title, FileInput, Modal } from '@mantine/core';
import { Dispatch } from 'react'
import { useForm } from '@mantine/form';
import { BakeryMenuItemTypes } from '../../types/types';
import { MenuAction } from '../reducer/Reducer';
import { PencilIcon } from '@heroicons/react/24/outline';
import { useDisclosure } from '@mantine/hooks';
import MenuButton from '../buttons/MenuButton';

type EditItemProps = {
  dispatch: Dispatch<MenuAction>;
  item: BakeryMenuItemTypes;
}


export default function EditItem({dispatch, item}: EditItemProps) {
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
       return item === 'id' ? null : <TextInput
        label={item}
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