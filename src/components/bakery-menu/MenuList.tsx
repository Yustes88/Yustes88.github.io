import { Dispatch } from "react";
import { BakeryMenuTypes } from "../../types/types";
import AddMenu from "../modals/AddMenu";
import { MenuAction } from "../reducer/Reducer";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

type MenuListProps = {
  handleClick: (id:string) => void;
  data: BakeryMenuTypes[];
  menu?: BakeryMenuTypes | undefined;
  dispatch?: Dispatch<MenuAction>,
}

export default function MenuList({handleClick, data, menu, dispatch}: MenuListProps) {

  return(
    <div className="my-2 mx-auto max-w-4xl">
    <ul className="flex flex-wrap justify-center text-lg leading-8">
    {data.map((item) => {
      let isSelected;
      if(menu) {
        isSelected = item.id === menu.id;
      }
      return(
          <li className="w-max hover:scale-110 hover:-translate-y-2 transition-all duration-500 text-brown" key={item.id}>
            <button 
            onClick={() => {handleClick(item.id)}} 
            className={`text-brown inline-block px-3.5 m-1 ${isSelected ? 'selected' : ''} hover:text-shadow transition-all `}>{item.title}
          </button></li>
          )
        })}
    </ul>
    <div className="mx-auto flex flex-col items-end gap-2 max-w-3xl p-6 lg:max-w-7xl lg:px-8">
          <AddMenu
                dispatch = {dispatch}
              />

      <ConfirmDeleteModal menu = {menu} type={'menu'} dispatch={dispatch} text={'Вы хотите удалить меню'} description={'После удаления меню невозможно будет восстановить'} color={'red-madder'}/>
          </div>
          
  </div>
  )
}