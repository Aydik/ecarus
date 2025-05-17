import { FC } from 'react';
import styles from './index.module.scss';
import { Button } from 'shared/ui/Button';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'widgets/Catalog/store';
import { resetFilters } from 'features/ProductsFilters/slices';
import { Filter } from 'features/ProductsFilters/components/Filter';

export const ProductsFilters: FC = () => {
  const dispatch: AppDispatch = useDispatch();

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
