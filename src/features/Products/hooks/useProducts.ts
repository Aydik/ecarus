import { useState, useEffect } from 'react';
import { Product } from 'entities/Product';
import { fetchProducts } from 'features/Products/api/productsApi.ts';

export function useProducts(deps: unknown[] = []) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, deps);

  return { products, loading, error };
}
