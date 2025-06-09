import { Dispatch, SetStateAction } from 'react';
import { FilterFlags } from 'shared/types';

export interface PointsFilters {
  materialFlags: FilterFlags;
  setMaterialFlags: Dispatch<SetStateAction<FilterFlags>>;
  brandsFlags: FilterFlags;
  setBrandsFlags: Dispatch<SetStateAction<FilterFlags>>;
}
