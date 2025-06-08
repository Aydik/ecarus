import { Dispatch, memo, SetStateAction, useCallback, useEffect } from 'react';
import { Filter } from 'features/ProductsFilters/components/Filter';
import { ProductsFilters } from 'features/ProductsFilters/types';
import { updateFilter } from 'features/ProductsFilters/utils';
import { useNavigate } from 'react-router-dom';
import { useUrlParamsChange } from 'shared/utils/params.ts';
import { FilterFlags } from 'shared/types';

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
    updateFilter(gendersFlags, 'genders', navigate);
  }, [gendersFlags]);

  useEffect(() => {
    updateFilter(productTypesFlags, 'types', navigate);
  }, [productTypesFlags]);

  useEffect(() => {
    updateFilter(brandsFlags, 'brands', navigate);
  }, [brandsFlags]);

  const handleUrlChange = useCallback(
    (path: string) => {
      const searchParams = new URLSearchParams(path);

      const applyFlags = (selected: string[], setFlags: Dispatch<SetStateAction<FilterFlags>>) => {
        setFlags(
          (prev) =>
            Object.fromEntries(
              Object.keys(prev).map((k) => [k, selected.includes(k)]),
            ) as FilterFlags,
        );
      };

      applyFlags(searchParams.get('genders')?.split(',') ?? [], setGendersFlags);
      applyFlags(searchParams.get('types')?.split(',') ?? [], setProductTypesFlags);
      applyFlags(searchParams.get('brands')?.split(',') ?? [], setBrandsFlags);
    },
    [setGendersFlags, setProductTypesFlags, setBrandsFlags],
  );

  useUrlParamsChange(handleUrlChange);

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
