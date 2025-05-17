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
    category: 'Одежда',
  },
  {
    id: 2,
    name: 'Vodka Stolichnaya',
    description: 'Для всех',
    brand: 'K&B',
    price: 55,
    image: 'vodka.png',
    gender: 'Мужской',
    category: 'Одежда',
  },
  {
    id: 3,
    name: 'Vodka Stolichnaya',
    description: 'Для всех',
    brand: 'K&B',
    price: 55,
    image: 'vodka.png',
    gender: 'Мужской',
    category: 'Одежда',
  },
  {
    id: 4,
    name: 'Vodka Stolichnaya',
    description: 'Для всех',
    brand: 'K&B',
    price: 55,
    image: 'vodka.png',
    gender: 'Мужской',
    category: 'Одежда',
  },
  {
    id: 5,
    name: 'Vodka Stolichnaya',
    description: 'Для всех',
    brand: 'K&B',
    price: 55,
    image: 'vodka.png',
    gender: 'Мужской',
    category: 'Одежда',
  },
];

export const fetchProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts);
    }, 500);
  });
};
