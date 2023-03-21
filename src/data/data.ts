import { randomId } from "@mantine/hooks";
import { AppRoute } from "../const";
import { BakeryMenuTypes, DeliveryDataTypes, MenuItem } from "../types/types";

const navItems: MenuItem[] = [
  {
  title: 'Меню',
  src: AppRoute.Menu,
},
  {
  title: 'Главная',
  src: AppRoute.Root,
},
  {
  title: 'О нас',
  src: AppRoute.About,
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
    id: '1',
    menu: [
    {
      id: randomId(),
      title: 'Булочка шоколадная с маком',
      ingredient: ['Тесто дрожжевое сладкое', 'Мак', 'Сахар', 'Масло раст', 'Ванилин', 'Сироп', 'Ганаш'],
      price: 125,
      imgSrc: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: randomId(),
      title: 'Бэккэн с капустой',
      ingredient: ['Тесто дрожжевое универсальное', 'Начинка (Капуста, масло слив, масло раст, яйцо, соль, перец)'],
      price: 80,
      imgSrc: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: randomId(),
      title: 'Булочка шоколадная с маком',
      ingredient: ['Тесто дрожжевое сладкое', 'Мак', 'Сахар', 'Масло раст', 'Ванилин', 'Сироп', 'Ганаш'],
      price: 125,
      imgSrc: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: randomId(),
      title: 'Мини-Губадия',
      ingredient: ['Тесто песочно-дрожжевое', 'Корт (творог, ряженка, сахар, масло слив)', 'Рис', 'Сахар', 'Яйцо', 'Изюм', 'Масло слив', 'Песочная крошка',],
      price: 140,
      description: 'традиционное татарское блюдо, представляющее собой закрытый круглый пирог из сдобного теста с многослойной начинкой из риса, карамелизированного творога и изюма',
      imgSrc: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: randomId(),
      title: 'Перемячи с говядиной',
      ingredient: ['Тесто дрожжевое универсальное', 'Фарш говяжий',],
      price: 110,
      imgSrc: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    },
    ]
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Пироги',
    id: randomId(),
    menu: [
      {
        id: randomId(),
        title: 'Пирог Губадия с изюмом/черносливом/курагой',
        ingredient: ['Тесто песочно-дрожжевое', 'Корт', 'Рис', 'Сахар', 'Яйцо', 'Изюм/курага/чернослив', 'Масло слив', 'Песочная крошка',
        ],
        price: 660,
        description: 'традиционное татарское блюдо, представляющее собой закрытый круглый пирог из сдобного теста с многослойной начинкой из риса, карамелизированного творога и изюма',
        imgSrc: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: randomId(),
        title: 'Пирог курица грибы',
        ingredient: ['Тесто дрожжевое универсальное', 'Начинка (курица, соевый соус, соль, перец, шампиньоны, лук репчатый, майонез', ],
        price: 450,
        imgSrc: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: randomId(),
        title: 'Пирог Расстегай',
        ingredient: ['Тесто дрожжевое универсальное', 'Начинка (Сом, рис, лук, майонез, соль, перец)'],
        price: 540,
        imgSrc: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      },
    ]
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


const AboutImages = [
  {
    id: randomId(),
    imgUrl: '/about/kids.jpg',
    alt: 'Дети в пекарне'
  },
  {
    id: randomId(),
    imgUrl: '/about/making.jpg',
    alt: 'Фото теста'
  },
  {
    id: randomId(),
    imgUrl: '/about/pie.jpg',
    alt: 'Фото пирога'
  },
  {
    id: randomId(),
    imgUrl: '/about/sonya.jpg',
    alt: 'Соня с пирогом'
  },
  {
    id: randomId(),
    imgUrl: '/about/team.jpg',
    alt: 'Команда пекарни'
  },
  {
    id: randomId(),
    imgUrl: '/about/girls.jpg',
    alt: 'Девушки в пекарне'
  },
]

const values = [
  {
    name: 'Натуральные продукты',
    description:
      'Только натуральные продукты, как будто из деревенской глубинки. А наш старший технолог строго следит за тем, чтобы к Вашему столу попали самые вкусные и румяные пирожки.',
  },
  {
    name: 'Национальные рецепты',
    description:
      'Команда «Мамы Волги» специально ездила на обучение в Казань, познать все тонкости традиционной рецептуры. Чтобы привезти кусочек татарского солнца в Северную столицу',
  },
  {
    name: 'Знакомый вкус',
    description:
      'Кроме традиционной еды, у нас есть пирожки с луком и яйцом, с капустой, с вишней и многие другие любимые с детства. А особая гордость - пирожки с сомом, которые мы сами придумали!',
  },
]

const team = [
  {
    name: 'Галина',
    role: 'Управляющая "Мамы Волги"',
    imageUrl:
      '/people/galina.jpg',
  },
  // More people...
]

export {navItems, bakeryMenuData, DeliveryData, AboutImages, values, team};