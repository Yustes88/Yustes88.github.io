export type MenuItem = {
  title: string;
  src: string;
}

export type BakeryMenuItemTypes = {
    id: string;
    title: string;
    ingredient: string[] | string,
    description?: string,
    price: number;
    imgSrc: string;
}

export type BakeryMenuTypes = {
  image: string;
  title: string;
  id: string;
  menu: BakeryMenuItemTypes[]
}

export type DeliveryDataTypes = {
  id: number;
  title: string;
  description: string;
    workingDays: string;
    workingHours: string;
    address: string;
    addressShort: string;
    phoneNumber: number;
    location: {
      lat: number; 
      lon: number;
    }
}