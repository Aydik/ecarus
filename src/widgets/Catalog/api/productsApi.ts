import { Product } from 'entities/Product/types';

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Vodka Stolichnaya',
    description: 'Для всех',
    brand: 'K&B',
    price: 55,
    image: 'vodka.png',
    gender: 'Мужской',
    type: 'Одежда',
  },
  {
    id: 2,
    name: 'Vodka Stolichnaya',
    description: 'Для всех',
    brand: 'K&B',
    price: 55,
    image: 'vodka.png',
    gender: 'Мужской',
    type: 'Одежда',
  },
  {
    id: 3,
    name: 'Vodka Stolichnaya',
    description: 'Для всех',
    brand: 'K&B',
    price: 55,
    image: 'vodka.png',
    gender: 'Мужской',
    type: 'Одежда',
  },
];

export const fetchProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts);
    }, 500);
  });
};
