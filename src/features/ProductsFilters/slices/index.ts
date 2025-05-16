import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterFlags, FiltersState } from 'features/ProductsFilters/types';
import { Brand, BRANDS, CATEGORIES, Category, Gender, GENDERS } from 'shared/types';

const initialState: FiltersState = {
  genders: GENDERS.reduce((acc, key) => {
    acc[key] = false;
    return acc;
  }, {} as FilterFlags<Gender>),
  categories: CATEGORIES.reduce((acc, key) => {
    acc[key] = false;
    return acc;
  }, {} as FilterFlags<Category>),
  brands: BRANDS.reduce((acc, key) => {
    acc[key] = false;
    return acc;
  }, {} as FilterFlags<Brand>),
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setGenres: (state, action: PayloadAction<FilterFlags<Gender>>) => {
      state.genders = action.payload;
    },
    setCategories: (state, action: PayloadAction<FilterFlags<Category>>) => {
      state.categories = action.payload;
    },
    setBrands: (state, action: PayloadAction<FilterFlags<Brand>>) => {
      state.brands = action.payload;
    },
    resetFilters: () => ({
      ...initialState,
    }),
  },
});

export const { setGenres, setBrands, setCategories, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
