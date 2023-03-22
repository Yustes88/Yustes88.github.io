import { Link, NavLink } from "react-router-dom";
import { MenuItem } from "../../types/types";

type MenuNavProps = {
  data: MenuItem[];
};

function MenuNav({ data }: MenuNavProps) {
  return (
    <>
      {data.map((item) => {
        //  const isSelected = item.title === menuByTitle.id;
        if(item.title === 'Меню') return '';
        
        return (
          <div className="relative sm:max-w-xl sm:mx-auto" key={item.title}>
            <NavLink
              to={item.src}
              className={({ isActive }) => (isActive ? "link-active text-base max-w-sm font-medium text-brown leading-tight" : "text-base max-w-sm font-medium text-brown leading-tight link link-underline link-underline-green")}
              key={item.title}
            >
              {/* <span className="link link-underline link-underline-green">
                {item.title}
              </span> */}
              <span className="link link-underline link-underline-green">
                {item.title}
              </span>
            </NavLink>
          </div>
        );
      })}
    </>
  );
}

export default MenuNav;
