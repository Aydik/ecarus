import { FC, useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Filter } from 'features/ProductsFilters/components/Filter';
import {
  getItemCategories,
  getSexes,
  getShopNames,
} from 'features/ProductsFilters/services/filters.service.ts';

export const ProductsFilters: FC = () => {
  const [sexes, setSexes] = useState<string[]>([]);
  const [itemCategories, setItemCategories] = useState<string[]>([]);
  const [shopNames, setShopNames] = useState<string[]>([]);

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        getSexes().then((data) => {
          setSexes(data);
        });
        getItemCategories().then((data) => {
          setItemCategories(data);
        });
        getShopNames().then((data) => {
          setShopNames(data);
          console.log(data);
        });
      } catch (error) {
        console.error('Ошибка загрузки фильтров:', error);
      }
      console.log(sexes, itemCategories, shopNames);
    };

    fetchFilters();
  }, []);

  return (
    <div className={styles.filters}>
      <Filter key={'genders'} title={'Пол'} filter={'genders'} />
      <Filter key={'categories'} title={'Тип товара'} filter={'categories'} />
      <Filter key={'brands'} title={'Брэнд'} filter={'brands'} />
    </div>
  );
};
