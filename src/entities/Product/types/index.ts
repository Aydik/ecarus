import { Brand, Gender, Category } from 'shared/types';

export interface Product {
  id: number;
  name: string;
  description: string;
  brand: Brand;
  price: number;
  image: string;
  category: Category;
  gender: Gender;
  rating: number;
  date: Date;
}

export type ProductCardType = Omit<Product, 'gender' | 'category'>;
