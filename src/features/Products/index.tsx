import { FC, useState } from 'react';
import { ProductCard, ProductCardSkeleton } from 'entities/Product';
import styles from './index.module.scss';
import { useProducts } from 'features/Products/hooks/useProducts.ts';
import clsx from 'clsx';

const limit = 12;

export const Products: FC = () => {
  const [page, setPage] = useState<number>(0);
  const { products, total, loading, error } = useProducts(page);

  const generatePages = () => {
    const pages: (number | 'start-ellipsis' | 'end-ellipsis')[] = [];
    const current = page;
    const neighbors = 1;

    if (totalPages <= 1) return pages;
    pages.push(0);
    if (current > neighbors + 1) {
      pages.push('start-ellipsis');
    }

    for (
      let i = Math.max(1, current - neighbors);
      i <= Math.min(totalPages - 2, current + neighbors);
      i++
    ) {
      pages.push(i);
    }

    if (current < totalPages - neighbors - 2) {
      pages.push('end-ellipsis');
    }
    if (totalPages > 1) {
      pages.push(totalPages - 1);
    }
    return pages;
  };

  const totalPages = Math.ceil(total / limit);
  const pages = generatePages();

  if (loading) {
    return (
      <div className={styles.products}>
        {Array.from({ length: limit }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    setPage(0);
    return <div>Ошибка загрузки: {error.message}</div>;
  }

  if (total === 0) {
    setPage(0);
    return <div>Продукты не найдены</div>;
  }

  return (
    <div>
      <div className={styles.products}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          {pages.map((iPage) =>
            iPage === 'start-ellipsis' || iPage === 'end-ellipsis' ? (
              <span key={iPage} className={styles.ellipsis}>
                ...
              </span>
            ) : (
              <button
                key={iPage}
                onClick={() => setPage(iPage as number)}
                className={clsx(styles.page, {
                  [styles.page_active]: page === iPage,
                })}
              >
                {(iPage as number) + 1}
              </button>
            ),
          )}
        </div>
      )}
    </div>
  );
};
