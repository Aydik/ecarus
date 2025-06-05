import { FC } from 'react';
import { useFilteredProducts } from 'features/Products/hooks/useFilteredProducts.ts';
import { ProductCard, ProductCardSkeleton } from 'entities/Product';
import styles from './index.module.scss';

export const Products: FC = () => {
  const { products, loading, error } = useFilteredProducts();

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

  if (products.length === 0) {
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
