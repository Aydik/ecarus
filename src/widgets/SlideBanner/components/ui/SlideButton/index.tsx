import { FC } from 'react';
import styles from './index.module.scss';
import { Icon } from 'shared/ui/Icon/Icon.tsx';
import clsx from 'clsx';

interface Props {
  onClick: () => void;
  reversed?: boolean;
  className?: string;
}

export const SlideButton: FC<Props> = ({ onClick, reversed = false, className }) => {
  return (
    <button
      className={clsx(
        styles.slideButton,
        reversed ? styles.slideButton_next : styles.slideButton_prev,
        className,
      )}
      onClick={onClick}
    >
      <Icon name={'arrow_slide'} className={styles.arrowReversed} />
    </button>
  );
};
