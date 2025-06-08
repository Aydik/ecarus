import { useState, useEffect } from 'react';
import { getProducts } from 'features/Products/services/products.service.ts';
import { ProductsEntity } from 'app/models/generated';

export function useProducts(params: URLSearchParams) {
  const [products, setProducts] = useState<ProductsEntity[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);

    const queryObject: Record<string, string | number> = {};
    params.forEach((value, key) => {
      queryObject[key] = value;
    });
    queryObject.page = parseInt(params.get('page') || '0', 10);

    getProducts(queryObject.page)
      .then((data) => {
        setTotal(data.total);
        setProducts(data.list);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [params]);

  return { products, total, loading, error };
}
