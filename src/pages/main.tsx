import Addresses from "../components/addresses/Addresses";
import BakeryMenu from "../components/bakery-menu/BakeryMenu";
import { ContactUs } from "../components/contact-us/ContactUs";
import { DeliveryCards } from "../components/delivery/DeliverCards";
import FAQ from "../components/faq/FAQ";
import { Hero } from "../components/hero/Hero";
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
    </>
  );
}

export default Main;
