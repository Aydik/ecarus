import { SwipeableModal } from 'shared/ui/SwipeableModal';
import { FC } from 'react';
import { Filters } from 'features/ProductsFilters';
import { ProductsSort } from 'features/ProductsSort';
import styles from './index.module.scss';
import { Button } from 'shared/ui/Button';
import { ProductsFilters } from 'features/ProductsFilters/types';
import { ResetButton } from 'features/ProductsFilters/components/ResetButton';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  filters: ProductsFilters;
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
        <ResetButton />
      </div>
    </SwipeableModal>
  );
};
