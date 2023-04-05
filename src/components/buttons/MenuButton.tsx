import { ReactNode } from "react"

type MenuButtonProps = {
  icon: ReactNode,
  menu?: string,
  text?: string,
  color: string,
  colorHover?: string,
  onClick: () => void,
  type: string,
}

export default function MenuButton({icon, menu, text, color, colorHover,  type, onClick}: MenuButtonProps) {
  return(
<button className={`flex items-center gap-x-1 text-${color} hover:text-${colorHover} hover:scale-110 active:text-${color} active:scale-105 transition-all`} onClick={onClick}>
    {icon}
    {type === 'item' ? '' : text ? <span>{text} &quot;{menu}&quot;</span> : ''}
</button>
  )
}