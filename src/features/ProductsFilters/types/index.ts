import { Dispatch, SetStateAction } from 'react';
import { FilterFlags } from 'shared/types';

export interface ProductsFilters {
  gendersFlags: FilterFlags;
  setGendersFlags: Dispatch<SetStateAction<FilterFlags>>;
  productTypesFlags: FilterFlags;
  setProductTypesFlags: Dispatch<SetStateAction<FilterFlags>>;
  brandsFlags: FilterFlags;
  setBrandsFlags: Dispatch<SetStateAction<FilterFlags>>;
}
