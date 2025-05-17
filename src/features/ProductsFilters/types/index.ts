import { Brand, Gender, Category } from 'shared/types';

export type FilterFlags<T extends string> = {
  [K in T]: boolean;
};

export interface FiltersState {
  genders: FilterFlags<Gender>;
  categories: FilterFlags<Category>;
  brands: FilterFlags<Brand>;
}

export type FilterKind = 'genders' | 'categories' | 'brands';

export interface FilterTypeMap {
  genders: Gender;
  categories: Category;
  brands: Brand;
}
