import { BakeryMenuTypes } from "../../types/types";

type MenuListProps = {
  handleClick: (id:string) => void;
  data: BakeryMenuTypes[];
}

export default function MenuList({handleClick, data}: MenuListProps) {
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
  </div>
  )
}