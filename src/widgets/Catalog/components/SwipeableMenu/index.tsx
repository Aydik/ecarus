import { SwipeableModal } from 'shared/components/SwipeableModal';
import { FC } from 'react';
import { Filters } from 'features/ProductsFilters';
import { ProductsSort } from 'features/ProductsSort';
import styles from './index.module.scss';
import { Button } from 'shared/ui/Button';
import { ResetButton } from 'features/ProductsFilters/components/ResetButton';

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
        <Filters />
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
