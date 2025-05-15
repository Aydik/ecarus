import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BrandFlags, CategoryFlags, GenderFlags } from 'features/ProductsFilter/types';
import { BRANDS, CATEGORIES, GENDERS } from 'shared/types';

interface filtersState {
  genders: GenderFlags;
  categories: CategoryFlags;
  brands: BrandFlags;
}

const initialState: filtersState = {
  genders: GENDERS.reduce((acc, key) => {
    acc[key] = false;
    return acc;
  }, {} as GenderFlags),
  categories: CATEGORIES.reduce((acc, key) => {
    acc[key] = false;
    return acc;
  }, {} as CategoryFlags),
  brands: BRANDS.reduce((acc, key) => {
    acc[key] = false;
    return acc;
  }, {} as BrandFlags),
};

export const sortSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setGenres: (state, action: PayloadAction<GenderFlags>) => {
      state.genders = action.payload;
    },
    setCategories: (state, action: PayloadAction<CategoryFlags>) => {
      state.categories = action.payload;
    },
    setBrands: (state, action: PayloadAction<BrandFlags>) => {
      state.brands = action.payload;
    },
  },
});

export const { setGenres, setBrands, setCategories } = sortSlice.actions;
export default sortSlice.reducer;
