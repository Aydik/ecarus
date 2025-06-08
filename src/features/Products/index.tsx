import { FC, useMemo, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ProductCard, ProductCardSkeleton } from 'entities/Product';
import styles from './index.module.scss';
import { useProducts } from 'features/Products/hooks/useProducts.ts';
import { setParam } from 'shared/utils/params.ts';
import { Pagination } from 'widgets/Catalog/components/Pagination';

const limit = 12;

export const Products: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const params = useMemo(() => new URLSearchParams(location.search), [location.search]);

  const page = parseInt(params.get('page') || '0', 10);
  const paramsWithoutPage = useMemo(() => {
    const p = new URLSearchParams(location.search);
    p.delete('page');
    return p.toString();
  }, [location.search]);

  const prevParamsWithoutPage = useRef(paramsWithoutPage);

  useEffect(() => {
    setParam('page', page.toString(), navigate);
  }, [navigate, page]);

  useEffect(() => {
    if (prevParamsWithoutPage.current !== paramsWithoutPage) {
      prevParamsWithoutPage.current = paramsWithoutPage;

      const newParams = new URLSearchParams(location.search);
      newParams.set('page', '0');

      if (page !== 0) {
        navigate({ search: newParams.toString() });
      }
    }
  }, [paramsWithoutPage, navigate, location.search, page]);

  const { products, total, loading, error } = useProducts(params);

  const totalPages = Math.ceil(total / limit);

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
    return <div>Ошибка загрузки: {error.message}</div>;
  }

  if (page > totalPages) {
    setParam('page', '0', navigate);
  }

  if (total === 0) {
    return <div>Продукты не найдены</div>;
  }

  return (
    <div>
      <div className={styles.products}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination current={page} totalPages={totalPages} />
    </div>
  );
};
