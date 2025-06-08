import { Dispatch, SetStateAction } from 'react';

export type FilterFlags = Record<string, boolean>;

export interface ProductsFilters {
  gendersFlags: FilterFlags;
  setGendersFlags: Dispatch<SetStateAction<FilterFlags>>;
  productTypesFlags: FilterFlags;
  setProductTypesFlags: Dispatch<SetStateAction<FilterFlags>>;
  brandsFlags: FilterFlags;
  setBrandsFlags: Dispatch<SetStateAction<FilterFlags>>;
}
