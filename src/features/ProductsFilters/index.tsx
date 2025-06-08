import { FC, useEffect, useState } from 'react';
import { Filter } from 'features/ProductsFilters/components/Filter';
import {
  getBrands,
  getGenders,
  getProductTypes,
} from 'features/ProductsFilters/services/filters.service.ts';
import { FilterFlags } from 'features/ProductsFilters/types';

export const ProductsFilters: FC = () => {
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

  return (
    <>
      <Filter
        key={JSON.stringify(gendersFlags)}
        title={'Пол'}
        name={'genders'}
        filterFlags={gendersFlags}
        setFilterFlags={setGendersFlags}
      />
      <Filter
        key={JSON.stringify(productTypes)}
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
};
