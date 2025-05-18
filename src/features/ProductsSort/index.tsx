import { FC } from 'react';
import styles from './index.module.scss';
import { Sort, SORT_TYPES } from 'features/ProductsSort/types';
import { Button } from 'shared/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'widgets/Catalog/store';
import { setSort } from 'features/ProductsSort/slices';

export const ProductsSort: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const selectedSort: Sort = useSelector((state: RootState) => state.sort.sortBy);
  const handleSortButtonClick = (sort: Sort) => {
    if (selectedSort === sort) dispatch(setSort(null));
    else dispatch(setSort(sort));
  };
  return (
    <div className={styles.sortTypes}>
      {SORT_TYPES.map((sort, index) => (
        <Button
          key={index}
          className={styles.sortButton}
          bold={false}
          style={selectedSort == sort ? 'selected' : 'secondary'}
          onClick={() => handleSortButtonClick(sort)}
        >
          {sort}
        </Button>
      ))}
    </div>
  );
};
