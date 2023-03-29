import { ReactNode } from "react"

type MenuButtonProps = {
  icon: ReactNode,
  menu: string,
  text: string,
  onClick: () => void,
}

export default function MenuButton({icon, menu, text, onClick}: MenuButtonProps) {
  return(
<button className="flex items-center gap-x-1 text-red-madder hover:text-red-rusty hover:scale-110 active:text-red-madder active:scale-105 transition-all" onClick={onClick}>
    {icon}
    <span>{text} &quot;{menu}&quot;</span>
</button>
  )
}