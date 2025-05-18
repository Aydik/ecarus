import { Product } from 'entities/Product/types';

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Vodka Stolichnaya',
    description: 'Для всех',
    brand: 'K&B',
    price: 270,
    image: 'vodka.png',
    gender: 'Мужской',
    category: 'Одежда',
    rating: 5,
    date: new Date('2020-02-15'),
  },
  {
    id: 2,
    name: 'Nike Air Max 2021',
    description: 'Мужская обувь',
    brand: 'NIKE',
    price: 1000,
    image: 'airMax2021.png',
    category: 'Обувь',
    gender: 'Мужской',
    rating: 4.5,
    date: new Date('2021-02-15'),
  },
  {
    id: 3,
    name: 'Nike Air Max 90 Premium',
    description: 'Мужская обувь',
    brand: 'NIKE',
    price: 750,
    image: 'airMax90.png',
    category: 'Обувь',
    gender: 'Мужской',
    rating: 4.9,
    date: new Date('2024-04-05'),
  },
  {
    id: 4,
    name: 'Adidas Alphabounce RC',
    description: 'Мужская обувь',
    brand: 'ADIDAS',
    price: 1200,
    image: 'AlphaBouceRC.png',
    category: 'Обувь',
    gender: 'Мужской',
    rating: 4.6,
    date: new Date('2024-01-20'),
  },
  {
    id: 5,
    name: 'Худи H&M',
    description: 'Легкое спортивное худи',
    brand: 'H&M',
    price: 1000,
    image: 'HMHoodie.png',
    category: 'Одежда',
    gender: 'Женский',
    rating: 4.3,
    date: new Date('2024-03-10'),
  },
];

export const fetchProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts);
    }, 500);
  });
};
