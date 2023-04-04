import { TextInput, Group, Box, Text, Button, Title, FileInput } from '@mantine/core';
import { Dispatch, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';
import { MenuAction } from '../reducer/Reducer';

type AddMenuProps = {
  open: boolean;
  setOpen: (arg0: boolean) => void;
  dispatch: Dispatch<MenuAction> | undefined;
}

function AddMenu({open, setOpen, dispatch}: AddMenuProps) {


  const form = useForm({
    initialValues: {
    image: '',
    title: '',
    id: randomId(),
    menu: [],
    },
  });

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="bg-brown bg-opacity-50 flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-brown-light-3 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                <form>
      
      <Box sx={{ maxWidth: 500 }} mx="auto">
        <Title size='md' className='mb-4'>
          Добавьте новое меню
        </Title>

      <Text size="sm" className='mb-4'>
          Создайте новое меню
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
        {...form.getInputProps('imgSrc')}
        />
  
        <Group className='flex justify-end mt-8'>
        <Button variant='default' className='mr-1' onClick={() => setOpen(false)}>Отмена</Button>
        <Button color='primary' onClick={() => {
          if(dispatch) {
            dispatch({
              type: 'add_new_menu',
              menu: form.values,
            })
            setOpen(false)
          }
        }
          }>Создать меню</Button>
      </Group>

      </Box>
      </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default AddMenu;