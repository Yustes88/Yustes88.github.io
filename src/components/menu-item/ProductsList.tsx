import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Dispatch } from "react";
import { BakeryMenuItemTypes, BakeryMenuTypes } from "../../types/types";
import ConfirmDeleteModal from "../bakery-menu/ConfirmDeleteModal";
import MenuButton from "../buttons/MenuButton";
import Error from "../error/Error";
import { MenuAction } from "../reducer/Reducer";

type ProductsListProps = {
  menu: BakeryMenuTypes,
  dispatch: Dispatch<MenuAction>,
}

export default function ProductsList({menu, dispatch}: ProductsListProps) {
  return(
    <>
    <div>
      <ConfirmDeleteModal menu = {menu} type={'menu'} id={menu.id} dispatch={dispatch} text={'Вы хотите удалить меню'} description={'После удаления меню невозможно будет восстановить'}/>
    </div>
    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0">
            {menu.menu === undefined ? <Error/> : menu.menu.map((item: BakeryMenuItemTypes) => (
              <div key={item.id} className="group card">
                <div className="absolute top-2 right-2 flex gap-2 z-50">

                <ConfirmDeleteModal id={item.id} menu={item} dispatch={dispatch} text={'Вы хотите удалить блюдо'} description={'После удаления блюдо невозможно будет восстановить'} type={'item'}/>

              <MenuButton type={'edit'} onClick={() => console.log('delete menu item')} icon={<PencilIcon className="w-6 h-6"/>} color={'white'}/>

                </div>
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="hidden">

                  {item.ingredient.join(', ')}
                </div>
                <div className="flex justify-between items-center">
                <h3 className="mt-2 text-base font-semibold text-gray-900 ">
                    {item.title}
                </h3>
                <p>{item.price}</p>
                </div>
                <p className="my-4 text-gray-500">{item.description}</p>

              </div>
            ))}
          </div>
          </>
  )
}