import { BakeryMenuTypes } from "../types/types";

export const getMenuById = (menuId: string|undefined, data: BakeryMenuTypes[]) => {
  return data.find(({id}) => id === menuId)

}