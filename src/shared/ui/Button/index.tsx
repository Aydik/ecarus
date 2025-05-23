import { FC, ReactNode } from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';

interface Props {
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
  style?: 'primary' | 'secondary' | 'selected';
  bold?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: FC<Props> = ({
  children,
  onClick,
  className,
  style,
  bold = true,
  type = 'button',
}) => {
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
      className={clsx(styles.button, styleClass, bold ? styles.button_bold : '', className)}
      type={type}
    >
      {children}
    </button>
  );
};
