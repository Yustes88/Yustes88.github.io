import { Reducer } from "react";
import { BakeryMenuTypes } from "../../types/types";

export type Add = {
  type: 'add_new_menu'; payload?: BakeryMenuTypes,
}


const menuReducer: Reducer<BakeryMenuTypes[], Add> = (state, action) => {
  switch (action.type) {
    case 'add_new_menu': {
      return { ...state, menu: [...state, action.payload] };
    }
  }
}

export default menuReducer