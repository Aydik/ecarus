import { ChangeEvent, FC, useEffect, useState } from 'react';
import styles from './index.module.scss';
import { DropdownFilter } from 'features/PointsFilters/components/DropdownFilter';
import { useNavigate } from 'react-router-dom';
import { updateFilter } from 'features/ProductsFilters/utils';
import { FilterFlags } from 'shared/types';

const materials = ['Пластик', 'Обувь', 'Старая одежда', 'Стекло', 'Бумага', 'Металл', 'Батарейки'];

const brands = ['Adidas', 'Puma', 'Reebok', 'Nike', 'Converse', 'Lacoste'];

export const PointsFilters: FC = () => {
  const [searchBarValue, setSearchBarValue] = useState<string>('');

  const handleChangeSearchBarValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchBarValue(e.target.value);
  };

  const navigate = useNavigate();

  const [materialFlags, setMaterialFlags] = useState<FilterFlags>({});
  const [brandsFlags, setBrandsFlags] = useState<FilterFlags>({});

  useEffect(() => {
    const flags: FilterFlags = {};
    for (const material of materials) {
      flags[material] = false;
    }
    setMaterialFlags(flags);
  }, []);

  useEffect(() => {
    const flags: FilterFlags = {};
    for (const brand of brands) {
      flags[brand] = false;
    }
    setBrandsFlags(flags);
  }, []);

  useEffect(() => {
    updateFilter(materialFlags, 'materials', navigate);
  }, [materialFlags, navigate]);

  useEffect(() => {
    updateFilter(brandsFlags, 'brands', navigate);
  }, [brandsFlags, navigate]);

  return (
    <div className={styles.filters}>
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
