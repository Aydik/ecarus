import { FC, useEffect, useState } from 'react';
import styles from './index.module.scss';
import { ProductCardType } from 'entities/Product';
import { Provider } from 'react-redux';
import { fetchProducts } from './api/productsApi.ts';
import { store } from './store';
import { ProductsSort } from 'features/ProductsSort';
import { Typography } from 'shared/ui/Typography';
import { ProductsFilters } from 'features/ProductsFilters';

export const Catalog: FC = () => {
  const [products, setProducts] = useState<ProductCardType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);
  console.log(products, loading);
  return (
    <Provider store={store}>
      <div className={styles.catalog}>
        <div className={styles.catalogCaption}>
          <Typography variant={'h2'}>ЭкоМаркет</Typography>
          <ProductsSort />
        </div>
        <div className={styles.filtersAndProductsContainer}>
          <ProductsFilters />
          <div />
        </div>
      </div>
    </Provider>
  );
};
