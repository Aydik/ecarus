import { memo } from 'react';
import { Filter } from 'features/ProductsFilters/components/Filter';
import { Filters as FiltersType } from 'features/ProductsFilters/types';

interface Props {
  filters: FiltersType;
}

const Filters = memo(function ({ filters }: Props) {
  const {
    gendersFlags,
    setGendersFlags,
    productTypesFlags,
    setProductTypesFlags,
    brandsFlags,
    setBrandsFlags,
  } = filters;

  return (
    <>
      <Filter
        title={'Пол'}
        name={'genders'}
        filterFlags={gendersFlags}
        setFilterFlags={setGendersFlags}
      />
      <Filter
        title={'Тип товара'}
        name={'productTypes'}
        filterFlags={productTypesFlags}
        setFilterFlags={setProductTypesFlags}
      />
      <Filter
        title={'Бренд'}
        name={'brands'}
        filterFlags={brandsFlags}
        setFilterFlags={setBrandsFlags}
      />
    </>
  );
});

Filters.displayName = 'Filter';

export { Filters };
