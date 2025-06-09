import { FC, useState } from 'react';
import styles from './index.module.scss';
import { ProductsSort } from 'features/ProductsSort';
import { Typography } from 'shared/ui/Typography';
import { Filters } from 'features/ProductsFilters';
import { Products } from 'features/Products';
import { SplitLayout } from 'shared/layout/SplitLayout';
import { ResetButton } from 'shared/components/ResetButton';
import { useBreakpoint } from 'shared/context/BreakpointContext.tsx';
import { Button } from 'shared/ui/Button';
import { SwipeableMenu } from 'widgets/Catalog/components/SwipeableMenu';

export const Catalog: FC = () => {
  const isDesktop = useBreakpoint() === 'desktop';
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
    <>
      {isDesktop ? (
        <div>
          <div className={styles.caption}>
            <Typography variant={'h2'}>ЭкоМаркет</Typography>
            <ProductsSort />
          </div>
          <SplitLayout>
            <div className={styles.filtersContainer}>
              <div className={styles.filtersDesktop}>
                <Filters />
              </div>
              <ResetButton />
            </div>
            <Products />
          </SplitLayout>
        </div>
      ) : (
        <>
          <div>
            <Typography variant={'h2'}>ЭкоМаркет</Typography>
            <Button
              variant={'secondary'}
              onClick={() => setIsFiltersOpen(true)}
              className={styles.filtersButton}
            >
              Фильтры
            </Button>
            <Products />
          </div>
          <SwipeableMenu isOpen={isFiltersOpen} onClose={() => setIsFiltersOpen(false)} />
        </>
      )}
    </>
  );
};
