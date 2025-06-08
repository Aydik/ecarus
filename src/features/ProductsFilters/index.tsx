import { Dispatch, memo, SetStateAction, useEffect } from 'react';
import { Filter } from 'features/ProductsFilters/components/Filter';
import { FilterFlags, ProductsFilters } from 'features/ProductsFilters/types';
import { updateFilters, useUrlParamsChange } from 'features/ProductsFilters/utils';
import { useNavigate } from 'react-router-dom';

interface Props {
  filters: ProductsFilters;
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
  const navigate = useNavigate();

  useEffect(() => {
    updateFilters(gendersFlags, 'genders', navigate);
  }, [gendersFlags]);

  useEffect(() => {
    updateFilters(productTypesFlags, 'types', navigate);
  }, [productTypesFlags]);

  useEffect(() => {
    updateFilters(brandsFlags, 'brands', navigate);
  }, [brandsFlags]);

  useUrlParamsChange((path: string) => {
    const searchParams = new URLSearchParams(path);
    console.log('Параметры URL изменились:', Object.fromEntries(searchParams.entries()));

    const applyFlags = (
      selectedValues: string[],
      setFlags: Dispatch<SetStateAction<FilterFlags>>,
    ) => {
      setFlags(
        (prev) =>
          Object.fromEntries(
            Object.keys(prev).map((key) => [key, selectedValues.includes(key)]),
          ) as FilterFlags,
      );
    };

    const genders = searchParams.get('genders')?.split(',') || [];
    const types = searchParams.get('types')?.split(',') || [];
    const brands = searchParams.get('brands')?.split(',') || [];

    applyFlags(genders, setGendersFlags);
    applyFlags(types, setBrandsFlags);
    applyFlags(brands, setBrandsFlags);
  });

  return (
    <>
      <Filter title={'Пол'} filterFlags={gendersFlags} setFilterFlags={setGendersFlags} />
      <Filter
        title={'Тип товара'}
        filterFlags={productTypesFlags}
        setFilterFlags={setProductTypesFlags}
      />
      <Filter title={'Бренд'} filterFlags={brandsFlags} setFilterFlags={setBrandsFlags} />
    </>
  );
});

Filters.displayName = 'Filter';

export { Filters };
