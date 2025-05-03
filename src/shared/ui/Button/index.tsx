import { FC, ReactNode } from 'react';
import styles from './index.module.scss';

interface Props {
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
  style?: 'primary' | 'secondary';
}

export const Button: FC<Props> = ({ children, onClick, className, style }) => {
  let styleClass = '';
  switch (style) {
    case 'primary':
      styleClass = styles.button_primary;
      break;
    case 'secondary':
      styleClass = styles.button_secondary;
      break;
    default:
      styleClass = '';
  }
  return (
    <button onClick={onClick} className={`${styles.button} ${styleClass} ${className}`}>
      {children}
    </button>
  );
};
