import { SwipeableModal } from 'shared/ui/SwipeableModal';
import { FC } from 'react';
import { ProductsFilters } from 'features/ProductsFilters';
import { ProductsSort } from 'features/ProductsSort';
import styles from './index.module.scss';
import { Button } from 'shared/ui/Button';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const SwipeableMenu: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <SwipeableModal isOpen={isOpen} onClose={onClose}>
      <div className={styles.productsSort}>
        <ProductsSort />
      </div>
      <div className={styles.filters}>
        <ProductsFilters />
      </div>
      <div className={styles.buttons}>
        <Button variant={'primary'}>Применить</Button>
        <Button variant={'secondary'}>Сбросить фильтры</Button>
      </div>
    </SwipeableModal>
  );
};
