import { FC } from 'react';
import styles from './index.module.scss';
import { Icon } from 'shared/ui/Icon/Icon.tsx';

interface Props {
  onClick: () => void;
  reversed?: boolean;
  className?: string;
}

export const SlideButton: FC<Props> = ({ onClick, reversed = false, className }) => {
  return (
    <button className={`${styles.slideButton} ${className}`} onClick={onClick}>
      <Icon name={'arrow'} className={reversed ? styles.arrowReversed : ''} />
    </button>
  );
};
