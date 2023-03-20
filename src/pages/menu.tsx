import { useParams } from "react-router-dom";
import MenuItemLayout from "../components/menu-item/MenuItemLayout";

function MenuPage() {
  let { id } = useParams();
  console.log(id)

  return (
    <>
    <MenuItemLayout id = {id}/>
    </>
  )
}


export default MenuPage;