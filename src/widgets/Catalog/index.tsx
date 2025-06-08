import { FC, useEffect, useMemo, useState } from 'react';
import styles from './index.module.scss';
import { ProductsSort } from 'features/ProductsSort';
import { Typography } from 'shared/ui/Typography';
import { Filters } from 'features/ProductsFilters';
import { Products } from 'features/Products';
import { SplitLayout } from 'shared/layout/SplitLayout';
import { ResetButton } from 'features/ProductsFilters/components/ResetButton';
import { useBreakpoint } from 'shared/context/BreakpointContext.tsx';
import { Button } from 'shared/ui/Button';
import { SwipeableMenu } from 'widgets/Catalog/components/SwipeableMenu';
import { FilterFlags, Filters as FiltersType } from 'features/ProductsFilters/types';
import {
  getBrands,
  getGenders,
  getProductTypes,
} from 'features/ProductsFilters/services/filters.service.ts';

export const Catalog: FC = () => {
  const isDesktop = useBreakpoint() === 'desktop';
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const [genders, setGenders] = useState<string[]>([]);
  const [productTypes, setProductTypes] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);

  const [gendersFlags, setGendersFlags] = useState<FilterFlags>({});
  const [productTypesFlags, setProductTypesFlags] = useState<FilterFlags>({});
  const [brandsFlags, setBrandsFlags] = useState<FilterFlags>({});

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        getGenders().then((data) => {
          setGenders(data.genders);
        });
        getProductTypes().then((data) => {
          setProductTypes(data.types);
        });
      } catch (error) {
        console.error('Ошибка загрузки фильтров:', error);
      }
    };

    fetchFilters();
  }, []);

  useEffect(() => {
    const flags: FilterFlags = {};
    for (const gender of genders) {
      flags[gender] = false;
    }
    setGendersFlags(flags);
  }, [genders]);

  useEffect(() => {
    const flags: FilterFlags = {};
    for (const productType of productTypes) {
      flags[productType] = false;
    }
    setProductTypesFlags(flags);
  }, [productTypes]);

  useEffect(() => {
    const flags: FilterFlags = {};
    for (const brand of brands) {
      flags[brand] = false;
    }
    setBrandsFlags(flags);
  }, [brands]);

  useEffect(() => {
    setBrands([]);
    productTypes.forEach((type) =>
      getBrands(type).then((data) => {
        setBrands((prev) => [...new Set([...prev, ...data.brands])]);
      }),
    );
  }, [productTypes]);

  const filtersProps = useMemo(
    (): FiltersType => ({
      gendersFlags,
      setGendersFlags,
      productTypesFlags,
      setProductTypesFlags,
      brandsFlags,
      setBrandsFlags,
    }),
    [
      gendersFlags,
      setGendersFlags,
      productTypesFlags,
      setProductTypesFlags,
      brandsFlags,
      setBrandsFlags,
    ],
  );

  return (
    <>
      {isDesktop ? (
        <div>
          <div className={styles.caption}>
            <Typography variant={'h2'}>ЭкоМаркет</Typography>
            <ProductsSort />
          </div>
          <SplitLayout>
            <div className={styles.filtersContainer}>
              <div className={styles.filtersDesktop}>
                <Filters filters={filtersProps} />
              </div>
              <ResetButton />
            </div>
            <Products />
          </SplitLayout>
        </div>
      ) : (
        <>
          <div>
            <Typography variant={'h2'}>ЭкоМаркет</Typography>
            <Button
              variant={'secondary'}
              onClick={() => setIsFiltersOpen(true)}
              className={styles.filtersButton}
            >
              Фильтры
            </Button>
            <Products />
          </div>
          <SwipeableMenu
            isOpen={isFiltersOpen}
            onClose={() => setIsFiltersOpen(false)}
            filters={filtersProps}
          />
        </>
      )}
    </>
  );
};
