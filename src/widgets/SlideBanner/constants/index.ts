import { SlideItem } from '../types';

export const SLIDES: SlideItem[] = [
  {
    backgroundColor: '#B3EDC8',
    backgroundImage: 'recycle.png',
    title: 'Сделаем мир чище',
    description:
      'Сдай макулатуру или старую одежду и получи скидку' +
      'на покупку товаров из переработанных материалов',
    buttonText: 'Условия сервиса',
  },
  {
    backgroundColor: '#FFE48F',
    backgroundImage: 'plastic.png',
    title: 'А вы знали...',
    description:
      'что среднее время разложения пластмассовых изделий колеблется от 400 до 700 лет,' +
      '  а полиэтиленовых пакетов — от 100 до 200 лет?',
    buttonText: 'Узнать больше',
  },
  {
    backgroundColor: '#BFF0DE',
    backgroundImage: 'masks.png',
    title: 'Что с масками?',
    description:
      'Медицинские маски не обязательно должны становиться отходами.' +
      ' Их тоже можно сдать на переработку.',
    buttonText: 'Пункты сбора масок',
  },
];
