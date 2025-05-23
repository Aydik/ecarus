import { FC, ReactNode, MouseEvent, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.scss';
import { Icon } from 'shared/ui/Icon/Icon.tsx';
import { Button } from 'shared/ui/Button';
import { Scrollbar } from 'shared/ui/ScrollBar';

interface Props {
  isOpened: boolean;
  onClose: () => void;
  children: ReactNode;
  isCloseOnButton?: boolean;
}

export const Modal: FC<Props> = ({ isOpened, onClose, children, isCloseOnButton = false }) => {
  const mouseDownTarget = useRef<EventTarget | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpened ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpened]);

  if (!isOpened) return null;

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    mouseDownTarget.current = e.target;
  };

  const handleMouseUp = (e: MouseEvent<HTMLDivElement>) => {
    if (mouseDownTarget.current === e.currentTarget && e.target === e.currentTarget) {
      onClose();
    }
    mouseDownTarget.current = null;
  };

  return ReactDOM.createPortal(
    <div className={styles.background} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
      <div className={styles.modal}>
        <Scrollbar maxHeight={'75vh'} scrollBar={false} topShadow={false}>
          {children}
        </Scrollbar>
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
