import { randomId } from "@mantine/hooks";
import { BakeryMenuTypes, DeliveryDataTypes, MenuItem } from "../types/types";

const navItems: MenuItem[] = [
  {
  title: 'Главная',
  src: '/'
},
  {
  title: 'О нас',
  src: '/'
},
  {
  title: 'Доставка',
  src: '/'
},
  {
  title: 'Контакты',
  src: '/'
},
];


const bakeryMenuData: BakeryMenuTypes[] = [
  {
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Выпечка',
    id: randomId(),
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Пироги',
    id: randomId(),
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Кондитерские изделия',
    id: randomId(),
  },
  {
    image:
      'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Горячее',
    id: randomId(),
  },
  {
    image:
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Завтраки',
    id: randomId(),
  },
  {
    image:
      'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Кыстыбый',
    id: randomId(),
  },
  {
    image:
      'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Салаты',
    id: randomId(),
  },
  {
    image:
      'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Супы',
    id: randomId(),
  },
  {
    image:
      'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Напитки',
    id: randomId(),
  },
];


const DeliveryData: DeliveryDataTypes[] = [
  {
    id: 1,
    title: 'Мама Волга',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    workingDays: 'Пн-Вс',
    workingHours: '9.00 - 21.00',
    address: 'СПб, Фрунзенский район, улица Восточная, 32',
    addressShort: 'Восточная, 32',
  },
  {
    id: 2,
    title: 'Мама Волга 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    workingDays: 'Пн-Вс',
    workingHours: '9.00 - 21.00',
    address: 'СПб, Фрунзенский район, улица Восточная, 32',
    addressShort: 'Восточная, 32',
  }
]

export {navItems, bakeryMenuData, DeliveryData};