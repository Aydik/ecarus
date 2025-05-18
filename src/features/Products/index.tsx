import { FC } from 'react';
import { useFilteredProducts } from 'features/Products/hooks/useFilteredProducts.ts';
import { ProductCard, ProductCardSkeleton } from 'entities/Product';
import { ProductGrid } from 'features/Products/components/ProductGrid';

export const Products: FC = () => {
  const { products, loading, error } = useFilteredProducts();

  if (loading) {
    return (
      <ProductGrid>
        {Array.from({ length: 9 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </ProductGrid>
    );
  }

  if (error) {
    return <div>Ошибка загрузки: {error.message}</div>;
  }

  if (products.length === 0) {
    return <div>Продукты не найдены</div>;
  }

  return (
    <ProductGrid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductGrid>
  );
};
