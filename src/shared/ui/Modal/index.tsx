import { FC, ReactNode, MouseEvent } from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.scss';
import { Icon } from 'shared/ui/Icon/Icon.tsx';
import { Button } from 'shared/ui/Button';

interface Props {
  isOpened: boolean;
  onClose: () => void;
  children: ReactNode;
  isCloseOnButton?: boolean;
}

export const Modal: FC<Props> = ({ isOpened, onClose, children, isCloseOnButton = false }) => {
  if (!isOpened) return null;

  const handleClickBackground = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className={styles.background} onClick={handleClickBackground}>
      <div className={styles.modal}>
        {children}
        {!isCloseOnButton && (
          <button className={styles.closeIconButton} onClick={onClose}>
            <Icon name={'close'} size={{ width: 32, height: 32 }} />
          </button>
        )}
        {isCloseOnButton && (
          <Button style={'primary'} onClick={onClose}>
            Закрыть
          </Button>
        )}
      </div>
    </div>,
    document.getElementById('modal-root')!,
  );
};
