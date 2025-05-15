import { FC, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.scss';

interface Props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: FC<Props> = ({ open, onClose, children }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <button className={styles.background} onClick={onClose}>
      <div className={styles.modal}>{children}</div>
    </button>,
    document.getElementById('modal-root')!,
  );
};
