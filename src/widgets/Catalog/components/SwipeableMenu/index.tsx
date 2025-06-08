import { SwipeableModal } from 'shared/ui/SwipeableModal';
import { FC } from 'react';
import { Filters } from 'features/ProductsFilters';
import { ProductsSort } from 'features/ProductsSort';
import styles from './index.module.scss';
import { Button } from 'shared/ui/Button';
import { Filters as FiltersType } from 'features/ProductsFilters/types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  filters: FiltersType;
}

export const SwipeableMenu: FC<Props> = ({ isOpen, onClose, filters }) => {
  return (
    <SwipeableModal isOpen={isOpen} onClose={onClose}>
      <div className={styles.productsSort}>
        <ProductsSort />
      </div>
      <div className={styles.filters}>
        <Filters filters={filters} />
      </div>
      <div className={styles.buttons}>
        <Button variant={'primary'} onClick={onClose}>
          Применить
        </Button>
        <Button variant={'secondary'} onClick={onClose}>
          Сбросить фильтры
        </Button>
      </div>
    </SwipeableModal>
  );
};
