import { FC } from 'react';
import styles from './index.module.scss';
import { Provider } from 'react-redux';
import { store } from './store';
import { ProductsSort } from 'features/ProductsSort';
import { Typography } from 'shared/ui/Typography';
import { ProductsFilters } from 'features/ProductsFilters';
import { Products } from 'features/Products';
import { SplitLayout } from 'shared/layout/SplitLayout';

export const Catalog: FC = () => {
  return (
    <Provider store={store}>
      <div className={styles.catalog}>
        <div className={styles.caption}>
          <Typography variant={'h2'}>ЭкоМаркет</Typography>
          <ProductsSort />
        </div>
        <SplitLayout>
          <ProductsFilters />
          <Products />
        </SplitLayout>
      </div>
    </Provider>
  );
};
