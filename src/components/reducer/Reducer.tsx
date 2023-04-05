import { BakeryMenuItemTypes, BakeryMenuTypes } from "../../types/types";


export interface Action<T, P, O> {
  type: T;
  menu: P;
  item?: O;
}

export type MenuAction =
  | Action<'add_new_menu', BakeryMenuTypes, null>
  | Action<'delete_menu', BakeryMenuTypes | BakeryMenuItemTypes, null>
  | Action<'delete_item',  BakeryMenuTypes | BakeryMenuItemTypes, BakeryMenuItemTypes>
  | Action<'edit_item',  BakeryMenuTypes | BakeryMenuItemTypes, BakeryMenuItemTypes>
  | Action<'add_new_item',  any, any>;
  ;


const menuReducer  = (state: BakeryMenuTypes[], action: MenuAction): BakeryMenuTypes[] => {
  switch (action.type) {
    case 'add_new_menu': {
      const newArray = state.slice()
      return [...newArray, action.menu];
    }
    case 'delete_menu': {
      return [...state.filter((menu) => menu.id !== action.menu.id)]
    }
    case 'add_new_item': {
      return state.map((menu) => {
        if(menu.id === action.menu.id) {
          const newItem = action.item;
          return {
            ...menu,
            menu: [...menu.menu, {...newItem, imgSrc: URL.createObjectURL(action.item.imgSrc)}]
          }
        }
        return menu;
      })
    }
    case 'delete_item': {
      return [...state.map(menu => {
        if (menu.id === action.menu.id && menu.menu) {
          return {
            ...menu,
            menu: menu.menu.filter(item => item.id !== action.item?.id)
          };
        } else {
          return menu;
        }})];
    }
    case 'edit_item': {
      return state.map(menu => {
        if (menu.id === action.menu.id && menu.menu) {
          const updatedItems = menu.menu.map(item => {
            if (item.id === action.item?.id) {
              return {
                ...action.item,
                ingredient: typeof action.item.ingredient === 'string' ?  action.item.ingredient.split(',') : action.item.ingredient,
              };
            } else {
              return item;
            }
          });
          return {
            ...menu,
            menu: updatedItems
          };
        } else {
          return menu;
        }
      });
    }
    default: {
      return state;
    }
  }
}

export default menuReducer