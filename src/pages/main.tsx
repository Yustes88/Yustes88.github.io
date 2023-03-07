import Addresses from "../components/addresses/Addresses";
import BakeryMenu from "../components/bakery-menu/BakeryMenu";
import { DeliveryCards } from "../components/delivery/DeliverCards";
import FAQ from "../components/faq/FAQ";
import { Hero } from "../components/hero/Hero";
import Menu from "../components/menu-navigation/Menu";

function Main() {
  return (
    <>
      <Menu />
      <Hero />
      <BakeryMenu/>
      <DeliveryCards/>
      <Addresses/>
      <FAQ/>
    </>
  );
}

export default Main;
