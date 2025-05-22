import { FC, useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Button } from 'shared/ui/Button';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'widgets/Catalog/store';
import { resetFilters } from 'features/ProductsFilters/slices';
import { Filter } from 'features/ProductsFilters/components/Filter';
import {
  getItemCategories,
  getSexes,
  getShopNames,
} from 'features/ProductsFilters/services/filters.service.ts';

export const ProductsFilters: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [sexes, setSexes] = useState<string[]>([]);
  const [itemCategories, setItemCategories] = useState<string[]>([]);
  const [shopNames, setShopNames] = useState<string[]>([]);

  useEffect(() => {
    const fetchSexes = async () => {
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
        console.log('Ошибка загрузки фильтров:', error);
      }
    };

    fetchSexes();
  }, []);

  console.log(sexes, itemCategories, shopNames);

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filters}>
        <Filter key={'genders'} title={'Пол'} filter={'genders'} />
        <Filter key={'categories'} title={'Тип товара'} filter={'categories'} />
        <Filter key={'brands'} title={'Брэнд'} filter={'brands'} />
      </div>
      <Button
        style={'secondary'}
        className={styles.resetButton}
        onClick={() => dispatch(resetFilters())}
      >
        Сбросить фильтры
      </Button>
    </div>
  );
};
