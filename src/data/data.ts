import { randomId } from "@mantine/hooks";
import { BakeryMenuTypes, DeliveryDataTypes, MenuItem } from "../types/types";

const navItems: MenuItem[] = [
  {
  title: 'Меню',
  src: '/'
},
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
    address: 'СПб, Центральный район, Литейный проспект 45/8, вход со стороны Белинского 8',
    addressShort: 'Литейный проспект 45/8',
    phoneNumber: 788899900032,
    location: {
      lat: 59.938538,
      lon: 30.347819,
    }
  },
  {
    id: 2,
    title: 'Мама Волга',
    description: 'Lorem ipsum dolor sit amet.',
    workingDays: 'Пн-Вс',
    workingHours: '9.00 - 21.00',
    address: 'СПб, Василеостровский район, Кадетская линия ВО, 31',
    addressShort: 'Кадетская линия ВО, 31',
    phoneNumber: 79125678956,
    location: {
      lat: 59.946949,  
      lon: 30.284719,
    }
  }, {
    id: 3,
    title: 'Мама Волга',
    description: 'Lorem ipsum dolor sit amet.',
    workingDays: 'Пн-Вс',
    workingHours: '9.00 - 21.00',
    address: 'СПб, Адмиралтейский район, 3-я Красноармейская ул., 2',
    addressShort: '3-я Красноармейская ул., 2',
    phoneNumber: 79125678956,
    location: {
      lat: 59.91457084558048,  
      lon: 30.316933177464982,
    }
  }
]

export {navItems, bakeryMenuData, DeliveryData};