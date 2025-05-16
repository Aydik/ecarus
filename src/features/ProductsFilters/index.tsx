import { FC } from 'react';
import styles from './index.module.scss';
import { Button } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import { RootState } from 'widgets/Catalog/store';
import { FilterFlags, FiltersState } from 'features/ProductsFilters/types';
import { Brand, Category, Gender } from 'shared/types';
import { setGenres, setBrands, setCategories } from 'features/ProductsFilters/slices';
import { Filter } from 'features/ProductsFilters/components/Filter';

export const ProductsFilters: FC = () => {
  const filtersState: FiltersState = useSelector((state: RootState) => state.filters);
  const genders: FilterFlags<Gender> = filtersState.genders;
  const categories: FilterFlags<Category> = filtersState.categories;
  const brands: FilterFlags<Brand> = filtersState.brands;

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filters}>
        <Filter title={'Пол'} filterFlags={genders} reducer={setGenres} />
        <Filter title={'Тип товара'} filterFlags={categories} reducer={setCategories} />
        <Filter title={'Брэнд'} filterFlags={brands} reducer={setBrands} />
      </div>
      <Button style={'secondary'} className={styles.resetButton}>
        Сбросить фильтры
      </Button>
    </div>
  );
};
