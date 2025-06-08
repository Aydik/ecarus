export type FilterFlags = Record<string, boolean>;

export interface Filters {
  gendersFlags: FilterFlags;
  setGendersFlags: (gendersFlags: FilterFlags) => void;
  productTypesFlags: FilterFlags;
  setProductTypesFlags: (productTypesFlags: FilterFlags) => void;
  brandsFlags: FilterFlags;
  setBrandsFlags: (brandsFlags: FilterFlags) => void;
}
