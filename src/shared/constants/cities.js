// Категории для Сочи (с ценами)
const SOCHI_CATEGORIES = [
  {
    id: 'houses-10-30',
    title: 'Дома',
    priceRange: 'от 10 млн до 30 млн',
    type: 'houses',
    minPrice: 10,
    maxPrice: 30,
  },
  {
    id: 'apartments-0-10',
    title: 'Квартиры, Апартаменты',
    priceRange: 'до 10 млн',
    type: 'apartments',
    minPrice: 0,
    maxPrice: 10,
  },
  {
    id: 'houses-31-65',
    title: 'Дома',
    priceRange: 'от 31 до 65 млн',
    type: 'houses',
    minPrice: 31,
    maxPrice: 65,
  },
  {
    id: 'apartments-11-65',
    title: 'Квартиры и апартаменты',
    priceRange: 'от 11 до 65 млн',
    type: 'apartments',
    minPrice: 11,
    maxPrice: 65,
  },
  {
    id: 'houses-66-99',
    title: 'Дома',
    priceRange: 'от 66 до 99 млн',
    type: 'houses',
    minPrice: 66,
    maxPrice: 99,
  },
  {
    id: 'apartments-66-99',
    title: 'Квартиры и апартаменты',
    priceRange: 'от 66 до 99 млн',
    type: 'apartments',
    minPrice: 66,
    maxPrice: 99,
  },
  {
    id: 'houses-100-300',
    title: 'Дома',
    priceRange: 'от 100 до 300 млн',
    type: 'houses',
    minPrice: 100,
    maxPrice: 300,
  },
  {
    id: 'apartments-100-300',
    title: 'Квартиры и апартаменты',
    priceRange: 'от 100 до 300 млн',
    type: 'apartments',
    minPrice: 100,
    maxPrice: 300,
  },
  {
    id: 'houses-301-plus',
    title: 'Дома',
    priceRange: 'от 301 млн до 2+ млрд',
    type: 'houses',
    minPrice: 301,
    maxPrice: 2000,
  },
  {
    id: 'apartments-301-plus',
    title: 'Квартиры и апартаменты',
    priceRange: 'от 301 до 2+ млрд',
    type: 'apartments',
    minPrice: 301,
    maxPrice: 2000,
  },
];

// Категории для Крыма (без цен)
const CRIMEA_CATEGORIES = [
  {
    id: 'crimea-new-buildings',
    title: 'Новостройки',
    type: 'new-buildings',
  },
  {
    id: 'crimea-apartments',
    title: 'Квартиры и апартаменты',
    type: 'apartments',
  },
  {
    id: 'crimea-houses',
    title: 'Дома по всему Крыму',
    type: 'houses',
  },
];

export const CITIES = {
  SOCHI: {
    id: 'sochi',
    name: 'Сочи',
    image: 'https://avatars.mds.yandex.net/i?id=7a944392e8cf65be04198167d379d448_l-5886407-images-thumbs&n=13',
    categories: SOCHI_CATEGORIES,
  },
  CRIMEA: {
    id: 'crimea',
    name: 'Крым',
    image: 'https://a.d-cd.net/0uATU22TbyaSgfDPMq0oZXWgsMc-1920.jpg',
    categories: CRIMEA_CATEGORIES,
  },
};

// Для обратной совместимости (deprecated, используйте city.categories)
export const CATEGORIES = SOCHI_CATEGORIES;

