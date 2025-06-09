import { FC, useEffect, useState } from 'react';
import styles from './index.module.scss';
import { DropdownFilter } from 'features/PointsFilters/components/DropdownFilter';
import { useNavigate } from 'react-router-dom';
import { updateFilter } from 'shared/utils/filters.ts';
import { FilterFlags } from 'shared/types';
import { useBreakpoint } from 'shared/context/BreakpointContext.tsx';
import { FiltersButton } from 'features/PointsFilters/components/FiltersButton';
import { Filter } from 'shared/components/Filter';

const materials = ['Пластик', 'Обувь', 'Старая одежда', 'Стекло', 'Бумага', 'Металл', 'Батарейки'];

const brands = ['Adidas', 'Puma', 'Reebok', 'Nike', 'Converse', 'Lacoste'];

export const PointsFilters: FC = () => {
  const isDesktop = useBreakpoint() === 'desktop';
  const navigate = useNavigate();

  const [materialFlags, setMaterialFlags] = useState<FilterFlags>({});
  const [brandsFlags, setBrandsFlags] = useState<FilterFlags>({});

  useEffect(() => {
    if (Object.keys(materialFlags).length > 0) updateFilter(materialFlags, 'materials', navigate);
  }, [materialFlags, navigate]);

  useEffect(() => {
    if (Object.keys(brandsFlags).length > 0) updateFilter(brandsFlags, 'brands', navigate);
  }, [brandsFlags, navigate]);

  useEffect(() => {
    const buildFlags = (
      paramKey: string,
      allValues: string[],
      params: URLSearchParams,
    ): FilterFlags =>
      allValues.reduce<FilterFlags>((acc, value) => {
        acc[value] = params.get(paramKey)?.split(',').includes(value) ?? false;
        return acc;
      }, {});

    const url = location.search;
    const searchParams = new URLSearchParams(url);
    setMaterialFlags(buildFlags('materials', materials, searchParams));
    setBrandsFlags(buildFlags('brands', brands, searchParams));
  }, [location.search]);

  if (isDesktop)
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
  else
    return (
      <FiltersButton>
        <div className={styles.filtersContainer}>
          <Filter
            title={'Материалы'}
            filterFlags={materialFlags}
            setFilterFlags={setMaterialFlags}
          />
          <Filter title={'Магазины'} filterFlags={brandsFlags} setFilterFlags={setBrandsFlags} />
        </div>
      </FiltersButton>
    );
};
