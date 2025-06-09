import { FC } from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';

export const FilterSkeleton: FC = () => {
  return (
    <div className={styles.filter}>
      <div className={clsx(styles.name, styles.skeleton)} />
      <div className={clsx(styles.checkboxes, styles.skeleton)} />
    </div>
  );
};
