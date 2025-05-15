import { Brand, Gender, Category } from 'shared/types';

export type GenderFlags = {
  [K in Gender]: boolean;
};

export type CategoryFlags = {
  [K in Category]: boolean;
};

export type BrandFlags = {
  [K in Brand]: boolean;
};
