import { FC, ReactNode } from 'react';
import styles from './index.module.scss';

interface Props {
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
}

export const Button: FC<Props> = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
};
