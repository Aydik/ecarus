import { CSSProperties, FC } from 'react';
import { useFilteredProducts } from 'features/Products/hooks/useFilteredProducts.ts';
import styles from './index.module.scss';
import { useBreakpoint } from 'shared/hooks/useBreakpoints.ts';
import { ProductCard } from 'entities/Product';

export const Products: FC = () => {
  const breakpoint = useBreakpoint();
  const properties: CSSProperties = {
    gridTemplateColumns: 'repeat(3, 1fr)',
    rowGap: 48,
    columnGap: 24,
  };
  if (breakpoint === 'tablet') {
    properties.gridTemplateColumns = 'repeat(2, 1fr)';
  } else if (breakpoint === 'mobile') {
    properties.gridTemplateColumns = 'repeat(1, 1fr)';
    properties.rowGap = 32;
  }
  const { products, loading, error } = useFilteredProducts();

  if (loading) {
    return <div>Загрузка продуктов...</div>;
  }

  if (error) {
    return <div>Ошибка загрузки: {error.message}</div>;
  }

  if (products.length === 0) {
    return <div>Продукты не найдены</div>;
  }

  return (
    <div
      className={styles.productGrid}
      style={{
        gridTemplateColumns: properties.gridTemplateColumns,
        rowGap: properties.rowGap,
        columnGap: properties.columnGap,
      }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
