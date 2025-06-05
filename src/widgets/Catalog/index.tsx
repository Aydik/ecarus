import { FC, useState } from 'react';
import styles from './index.module.scss';
import { Provider } from 'react-redux';
import { store } from './store';
import { ProductsSort } from 'features/ProductsSort';
import { Typography } from 'shared/ui/Typography';
import { ProductsFilters } from 'features/ProductsFilters';
import { Products } from 'features/Products';
import { SplitLayout } from 'shared/layout/SplitLayout';
import { ResetButton } from 'features/ProductsFilters/components/ResetButton';
import { useBreakpoint } from 'shared/context/BreakpointContext.tsx';
import { SwipeableModal } from 'shared/ui/SwipeableModal';

export const Catalog: FC = () => {
  const breakpoint = useBreakpoint();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  return (
    <Provider store={store}>
      {/*<div className={styles.catalog}>*/}
      {/*  <div className={styles.caption}>*/}
      {/*    <Typography variant={'h2'}>ЭкоМаркет</Typography>*/}
      {/*    <ProductsSort />*/}
      {/*  </div>*/}
      {/*  <SplitLayout>*/}
      {/*    <div className={styles.filtersContainer}>*/}
      {/*      <ProductsFilters />*/}
      {/*      <ResetButton />*/}
      {/*    </div>*/}
      {/*    <Products />*/}
      {/*  </SplitLayout>*/}
      {/*</div>*/}
      <button onClick={() => setIsFiltersOpen(true)}>Фильтры</button>

      <SwipeableModal isOpen={isFiltersOpen} onClose={() => setIsFiltersOpen(false)}>
        <div className={styles.filters}>
          <div className={styles.filterGroup}>
            <h3>Пол</h3>
            <label>
              <input type="checkbox" checked /> Мужской
            </label>
            <label>
              <input type="checkbox" /> Женский
            </label>
          </div>
          <div className={styles.filterGroup}>
            <h3>Пол</h3>
            <label>
              <input type="checkbox" checked /> Мужской
            </label>
            <label>
              <input type="checkbox" /> Женский
            </label>
          </div>
          <div className={styles.filterGroup}>
            <h3>Пол</h3>
            <label>
              <input type="checkbox" checked /> Мужской
            </label>
            <label>
              <input type="checkbox" /> Женский
            </label>
          </div>
          <div className={styles.filterGroup}>
            <h3>Пол</h3>
            <label>
              <input type="checkbox" checked /> Мужской
            </label>
            <label>
              <input type="checkbox" /> Женский
            </label>
          </div>
          <div className={styles.filterGroup}>
            <h3>Пол</h3>
            <label>
              <input type="checkbox" checked /> Мужской
            </label>
            <label>
              <input type="checkbox" /> Женский
            </label>
          </div>
        </div>
      </SwipeableModal>
    </Provider>
  );
};
