import { Dispatch, Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import MenuList from '../bakery-menu/MenuList'
import ProductsList from './ProductsList'
import { getMenuById } from '../../utils/utils'
import Error from '../error/Error'
import { BakeryMenuTypes } from '../../types/types'
import { MenuAction } from '../reducer/Reducer'


const sortOptions = [
  { name: 'Most Popular', href: '#' },
  { name: 'Best Rating', href: '#' },
  { name: 'Newest', href: '#' },
  { name: 'Price: Low to High', href: '#' },
  { name: 'Price: High to Low', href: '#' },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

type MenuItemLayoutProps = {
  id: string | undefined,
  bakeryData: BakeryMenuTypes[],
  dispatch: Dispatch<MenuAction>,
}

export default function MenuItemLayout({id, bakeryData, dispatch}: MenuItemLayoutProps) {
  const menubyId = getMenuById(id, bakeryData)

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [menu, setMenu] = useState(menubyId)

  
  const handleClick = (id: string) => {    
  return bakeryData.filter((item) => {
    return item.id === id ? setMenu(item) : null;
  }) 
  }

  return (
    <div>


      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 sm:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main>
          <div className="mx-auto max-w-3xl p-6 lg:max-w-7xl lg:px-8">
            <div className="pt-20 text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">Наше меню</h1>
              <p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">
                Все наши продукты сделаны с любовью.
              </p>
            </div>

            {/* <Filter/> */}
            <MenuList handleClick={handleClick} data={bakeryData} dispatch={dispatch} menu={menu}/>

            {/* Filters */}
            <section aria-labelledby="filter-heading" className="border-t border-gray-200 pt-6">
              <h2 id="filter-heading" className="sr-only">
                Product filters
              </h2>

              <div className="flex items-center justify-between">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      Sort
                      <ChevronDownIcon
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {sortOptions.map((option) => (
                          <Menu.Item key={option.name}>
                            {({ active }) => (
                              <a
                                href={option.href}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm font-medium text-gray-900'
                                )}
                              >
                                {option.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

              </div>
            </section>

            {/* Product grid */}
            <section aria-labelledby="products-heading" className="mt-8">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>
              {menu?.menu ? <ProductsList menu = {menu} dispatch={dispatch}/> : <Error/>}
              
            </section>

          </div>

          
        </main>

      </div>
    </div>
  )
}
