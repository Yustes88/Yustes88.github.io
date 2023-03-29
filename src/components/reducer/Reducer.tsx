import { Reducer } from "react";
import { BakeryMenuTypes } from "../../types/types";

export type Add = {
  type: 'add_new_menu' | 'delete_menu'; payload?: BakeryMenuTypes,
}

export interface Action<T, P> {
  type: T;
  payload: P;
}

export type MenuAction =
  | Action<'add_new_menu', BakeryMenuTypes>
  | Action<'delete_menu', string>;


const menuReducer  = (state: BakeryMenuTypes[], action: MenuAction): BakeryMenuTypes[] => {
  switch (action.type) {
    case 'add_new_menu': {
      console.log('added')
      return [...state, action.payload];
    }
    case 'delete_menu': {
      return [...state.filter((todo) => todo.id !== action.payload)]
    }
    default: {
      return state;
    }
  }
}

export default menuReducer