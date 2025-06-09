import { ChangeEvent, FC, useEffect, useState } from 'react';
import styles from './index.module.scss';
import { DropdownFilter } from 'features/PointsFilters/components/DropdownFilter';
import { PointsFilters as PointsFiltersType } from 'features/PointsFilters/types';
import { useNavigate } from 'react-router-dom';
import { updateFilter } from 'features/ProductsFilters/utils';
import { SearchBar } from 'features/PointsFilters/components/SearchBar';

interface Props {
  filters: PointsFiltersType;
}

export const PointsFilters: FC<Props> = ({ filters }) => {
  const { materialFlags, setMaterialFlags, brandsFlags, setBrandsFlags } = filters;

  const [searchBarValue, setSearchBarValue] = useState<string>('');

  const handleChangeSearchBarValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchBarValue(e.target.value);
  };

  const navigate = useNavigate();

  useEffect(() => {
    updateFilter(materialFlags, 'materials', navigate);
  }, [materialFlags, navigate]);

  useEffect(() => {
    updateFilter(brandsFlags, 'brands', navigate);
  }, [brandsFlags, navigate]);

  return (
    <div className={styles.filters}>
      <SearchBar value={searchBarValue} handleChange={handleChangeSearchBarValue} />
      <DropdownFilter
        title={'Материалы'}
        filterFlags={materialFlags}
        setFilterFlags={setMaterialFlags}
      />
      <DropdownFilter
        title={'Магазины'}
        filterFlags={brandsFlags}
        setFilterFlags={setBrandsFlags}
      />
    </div>
  );
};
