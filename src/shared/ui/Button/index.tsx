import { FC, ReactNode } from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';

interface Props {
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
  style?: 'primary' | 'secondary' | 'selected';
  bold?: boolean;
}

export const Button: FC<Props> = ({ children, onClick, className, style, bold = true }) => {
  let styleClass;
  switch (style) {
    case 'primary':
      styleClass = styles.button_primary;
      break;
    case 'secondary':
      styleClass = styles.button_secondary;
      break;
    case 'selected':
      styleClass = styles.button_selected;
      break;
    default:
      styleClass = '';
  }
  return (
    <button
      onClick={onClick}
      className={clsx(styles.button, styleClass, bold ? 'button_bold' : '', className)}
    >
      {children}
    </button>
  );
};
