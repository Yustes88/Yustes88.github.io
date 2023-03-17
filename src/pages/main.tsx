import Addresses from "../components/addresses/Addresses";
import BakeryMenu from "../components/bakery-menu/BakeryMenu";
import { ContactUs } from "../components/contact-us/ContactUs";
import { DeliveryCards } from "../components/delivery/DeliverCards";
import FAQ from "../components/faq/FAQ";
import { Footer } from "../components/footer/Footer";
import { Hero } from "../components/hero/Hero";
import { navItems } from "../data/data";
import { BakeryMenuTypes } from "../types/types";

type MainProps = {
  data: BakeryMenuTypes[]
}

function Main({data}: MainProps) {
  return (
    <>
      <Hero />
      <BakeryMenu data = {data}/>
      <DeliveryCards/>
      <Addresses/>
      <FAQ/>
      <ContactUs/>
      <Footer links={navItems}/>
    </>
  );
}

export default Main;
