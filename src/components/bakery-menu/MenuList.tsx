import { Dispatch, useState } from "react";
import { BakeryMenuTypes } from "../../types/types";
import AddMenu from "../modals/AddMenu";
import { MenuAction } from "../reducer/Reducer";

type MenuListProps = {
  handleClick: (id:string) => void;
  data: BakeryMenuTypes[];
  dispatch?: Dispatch<MenuAction>,
}

export default function MenuList({handleClick, data, dispatch}: MenuListProps) {
  const [openAddMenu, setOpenAddMenu] = useState(false)

  const setModalIsOpenToTrue =()=>{
    setOpenAddMenu(true)
}
  return(
    <div className="my-2 mx-auto max-w-4xl">
    <ul className="flex flex-wrap justify-center text-lg leading-8">
    {data.map((item) => {
      return(
          <li className="w-max hover:scale-110 hover:-translate-y-2 transition-all duration-500 text-brown" key={item.id}>
            <button 
            onClick={() => {handleClick(item.id)}} 
            className='text-brown inline-block px-3.5 m-1 hover:text-shadow transition-all '>{item.title}
          </button></li>
          )
        })}
    </ul>
    <div className="mx-auto flex justify-end max-w-3xl p-6 lg:max-w-7xl lg:px-8">
          <button onClick={setModalIsOpenToTrue}>
          &#43;	Добавить новое меню
          </button>
          <AddMenu
                open={openAddMenu}
                setOpen={setOpenAddMenu}
                dispatch = {dispatch}
              />
          </div>
  </div>
  )
}