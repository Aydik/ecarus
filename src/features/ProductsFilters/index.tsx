import { FC, useEffect, useState } from 'react';
import { Filter } from 'features/ProductsFilters/components/Filter';
import {
  getBrands,
  getGenders,
  getProductTypes,
} from 'features/ProductsFilters/services/filters.service.ts';

export const ProductsFilters: FC = () => {
  const [genders, setGenders] = useState<string[]>([]);
  const [productTypes, setProductTypes] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);

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
    setBrands([]);
    productTypes.forEach((type) =>
      getBrands(type).then((data) => {
        setBrands((prev) => [...new Set([...prev, ...data.brands])]);
      }),
    );
  }, [productTypes]);

  return (
    <>
      <Filter key={'genders'} title={'Пол'} filter={'genders'} />
      <Filter key={'categories'} title={'Тип товара'} filter={'categories'} />
      <Filter key={'brands'} title={'Брэнд'} filter={'brands'} />
      <div>{genders}</div>
      <div>{productTypes}</div>
      <div>{brands}</div>
    </>
  );
};
