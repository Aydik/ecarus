import { Gender, ProductType } from 'shared/types';

export interface Product {
  id: number;
  name: string;
  description: string;
  brand: string;
  price: number;
  image: string;
  type: ProductType;
  gender: Gender;
}
