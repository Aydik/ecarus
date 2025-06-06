import styles from './index.module.scss';
import { resetFilters } from 'features/ProductsFilters/slices';
import { Button } from 'shared/ui/Button';
import { FC } from 'react';
import { AppDispatch } from 'widgets/Catalog/store';
import { useDispatch } from 'react-redux';

export const ResetButton: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <Button
      variant={'secondary'}
      className={styles.resetButton}
      onClick={() => dispatch(resetFilters())}
    >
      Сбросить фильтры
    </Button>
  );
};
