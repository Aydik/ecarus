import { FC } from 'react';
import { Product } from 'entities/Product/types';
import styles from './index.module.scss';
import { Amount } from 'shared/components/Amount';
import { Typography } from 'shared/ui/Typography';

interface Props {
  product: Omit<Product, 'gender' | 'type'>;
}

export type { Product };

export const ProductCard: FC<Props> = ({ product }) => {
  return (
    <button className={styles.productCard}>
      <div
        className={styles.productImage}
        style={{
          backgroundImage: product.image
            ? `url(/assets/images/productImages/${product.image})`
            : 'none',
        }}
      >
        <div className={styles.brand}>{product.brand}</div>
      </div>
      <div className={styles.productInfo}>
        <div className={styles.textContainer}>
          <Typography variant={'p'} className={styles.name}>
            {product.name}
          </Typography>
          <Typography variant={'p'} className={styles.description}>
            {product.description}
          </Typography>
        </div>
        <Amount amount={product.price} />
      </div>
    </button>
  );
};
