import { SwipeableModal } from 'shared/components/SwipeableModal';
import { FC, ReactNode } from 'react';
import styles from './index.module.scss';
import { Button } from 'shared/ui/Button';
import { ResetButton } from 'shared/components/ResetButton';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const SwipeableFilters: FC<Props> = ({ isOpen, onClose, children }) => {
  return (
    <SwipeableModal isOpen={isOpen} onClose={onClose}>
      {children}
      <div className={styles.buttons}>
        <Button variant={'primary'} onClick={onClose}>
          Применить
        </Button>
        <ResetButton />
      </div>
    </SwipeableModal>
  );
};
