import { FC, useEffect } from 'react';
import styles from './index.module.scss';
import { DropdownFilter } from 'features/PointsFilters/components/DropdownFilter';
import { PointsFilters as PointsFiltersType } from 'features/PointsFilters/types';
import { useNavigate } from 'react-router-dom';
import { updateFilter } from 'features/ProductsFilters/utils';

interface Props {
  filters: PointsFiltersType;
}

export const PointsFilters: FC<Props> = ({ filters }) => {
  const { materialFlags, setMaterialFlags, brandsFlags, setBrandsFlags } = filters;

  const navigate = useNavigate();

  useEffect(() => {
    updateFilter(materialFlags, 'materials', navigate);
  }, [materialFlags, navigate]);

  useEffect(() => {
    updateFilter(brandsFlags, 'brands', navigate);
  }, [brandsFlags, navigate]);

  return (
    <div className={styles.filters}>
      <button />
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
