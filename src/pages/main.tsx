import Addresses from "../components/addresses/Addresses";
import BakeryMenu from "../components/bakery-menu/BakeryMenu";
import { ContactUs } from "../components/contact-us/ContactUs";
import { DeliveryCards } from "../components/delivery/DeliverCards";
import FAQ from "../components/faq/FAQ";
import { Footer } from "../components/footer/Footer";
import { Hero } from "../components/hero/Hero";
import Menu from "../components/menu-navigation/Menu";
import { navItems } from "../data/data";

function Main() {
  return (
    <>
      <Menu />
      <Hero />
      <BakeryMenu/>
      <DeliveryCards/>
      <Addresses/>
      <FAQ/>
      <ContactUs/>
      <Footer links={navItems}/>
    </>
  );
}

export default Main;
