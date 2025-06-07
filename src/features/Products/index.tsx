import { FC } from 'react';
import { ProductCard, ProductCardSkeleton } from 'entities/Product';
import styles from './index.module.scss';
import { useProducts } from 'features/Products/hooks/useProducts.ts';

export const Products: FC = () => {
  const { products, total, loading, error } = useProducts();

  if (loading) {
    return (
      <div className={styles.products}>
        {Array.from({ length: 9 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return <div>Ошибка загрузки: {error.message}</div>;
  }

  if (total === 0) {
    return <div>Продукты не найдены</div>;
  }

  return (
    <div className={styles.products}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
