import { FC } from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';

export const ProductCardSkeleton: FC = () => {
  return (
    <div className={styles.productCard}>
      <div className={clsx(styles.productImage, styles.skeleton)} />
      <div className={styles.productInfo}>
        <div className={styles.textContainer}>
          <div className={clsx(styles.skeleton, styles.nameSkeleton)} />
          <div className={clsx(styles.skeleton, styles.descriptionSkeleton)} />
        </div>
        <div className={clsx(styles.skeleton, styles.priceSkeleton)} />
      </div>
    </div>
  );
};
