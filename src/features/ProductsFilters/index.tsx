import { FC, useEffect, useState } from 'react';
import { Filter } from 'shared/components/Filter';
import { updateFilter } from 'features/ProductsFilters/utils';
import { useNavigate } from 'react-router-dom';
import { FilterFlags } from 'shared/types';
import {
  getBrands,
  getGenders,
  getProductTypes,
} from 'features/ProductsFilters/services/filters.service.ts';

export const Filters: FC = () => {
  const navigate = useNavigate();

  const [genders, setGenders] = useState<string[]>([]);
  const [productTypes, setProductTypes] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);

  const [gendersFlags, setGendersFlags] = useState<FilterFlags>({});
  const [productTypesFlags, setProductTypesFlags] = useState<FilterFlags>({});
  const [brandsFlags, setBrandsFlags] = useState<FilterFlags>({});

  const [urlParams, setUrlParams] = useState<{
    genders: string[];
    types: string[];
    brands: string[];
  }>({ genders: [], types: [], brands: [] });

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

    const url = location.search;
    const searchParams = new URLSearchParams(url);
    setUrlParams({
      genders: searchParams.get('genders')?.split(',') ?? [],
      types: searchParams.get('types')?.split(',') ?? [],
      brands: searchParams.get('brands')?.split(',') ?? [],
    });

    fetchFilters();
  }, []);

  useEffect(() => {
    setBrands([]);
    productTypes.forEach((type) =>
      getBrands(type).then((data) => {
        setBrands((prev) => [...new Set([...prev, ...data.brands])]);
      }),
    );
  }, [productTypes]);

  useEffect(() => {
    const flags: FilterFlags = {};
    for (const gender of genders) {
      flags[gender] = urlParams.brands.includes(gender);
    }
    setGendersFlags(flags);
  }, [genders, urlParams]);

  useEffect(() => {
    const flags: FilterFlags = {};
    for (const productType of productTypes) {
      flags[productType] = urlParams.brands.includes(productType);
    }
    setProductTypesFlags(flags);
  }, [productTypes, urlParams]);

  useEffect(() => {
    const flags: FilterFlags = {};
    for (const brand of brands) {
      flags[brand] = urlParams.brands.includes(brand);
    }
    setBrandsFlags(flags);
  }, [brands, urlParams]);

  useEffect(() => {
    if (Object.keys(gendersFlags).length > 0) updateFilter(gendersFlags, 'genders', navigate);
  }, [gendersFlags, navigate]);

  useEffect(() => {
    if (Object.keys(productTypesFlags).length > 0)
      updateFilter(productTypesFlags, 'types', navigate);
  }, [productTypesFlags, navigate]);

  useEffect(() => {
    if (Object.keys(brandsFlags).length > 0) updateFilter(brandsFlags, 'brands', navigate);
  }, [brandsFlags, navigate]);

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
};
