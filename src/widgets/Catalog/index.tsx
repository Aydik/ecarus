import { FC } from 'react';
import styles from './index.module.scss';
import { Provider } from 'react-redux';
import { store } from './store';
import { ProductsSort } from 'features/ProductsSort';
import { Typography } from 'shared/ui/Typography';
import { ProductsFilters } from 'features/ProductsFilters';
import { Products } from 'features/Products';

export const Catalog: FC = () => {
  return (
    <Provider store={store}>
      <div className={styles.catalog}>
        <div className={styles.catalogCaption}>
          <Typography variant={'h2'}>ЭкоМаркет</Typography>
          <ProductsSort />
        </div>
        <div className={styles.filtersAndProductsContainer}>
          <ProductsFilters />
          <Products />
        </div>
      </div>
    </Provider>
  );
};
