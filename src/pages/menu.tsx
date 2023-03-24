import { useParams } from "react-router-dom";
import MenuItemLayout from "../components/menu-item/MenuItemLayout";
import { bakeryMenuData } from "../data/data";

function MenuPage() {
  let { id } = useParams();
  console.log(id)

  return (
    <>
    <MenuItemLayout id = {id} bakeryData={bakeryMenuData}/>
    </>
  )
}


export default MenuPage;