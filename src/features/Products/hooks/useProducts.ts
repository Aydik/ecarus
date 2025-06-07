import { useState, useEffect } from 'react';
import { getProducts } from 'features/Products/api/productsApi.ts';
import { ProductsEntity } from 'app/models/generated';

export function useProducts(deps: unknown[] = []) {
  const [products, setProducts] = useState<ProductsEntity[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((data) => {
        setTotal(data.total);
        setProducts(data.list);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, deps);

  return { products, total, loading, error };
}
