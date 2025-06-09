import { FC, useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Sort, SORT_TYPES } from 'features/ProductsSort/types';
import { Button } from 'shared/ui/Button';
import { deleteParam, setParam } from 'shared/utils/params.ts';
import { useNavigate } from 'react-router-dom';

export const ProductsSort: FC = () => {
  const navigate = useNavigate();

  const url = location.search;
  const searchParams = new URLSearchParams(url);
  const [selectedSort, setSelectedSort] = useState<Sort>(searchParams.get('sortBy') as Sort);

  const handleSortButtonClick = (key: Sort) =>
    setSelectedSort((prev) => (key === prev ? null : key));

  useEffect(() => {
    if (selectedSort) setParam('sortBy', selectedSort, navigate);
    else deleteParam('sortBy', navigate);
  }, [selectedSort, navigate]);

  return (
    <div className={styles.sortTypes}>
      {Object.entries(SORT_TYPES).map(([key, label]) => (
        <Button
          key={`${key}_${selectedSort === key ? 'selected' : 'secondary'}`}
          className={styles.sortButton}
          bold={false}
          variant={selectedSort === key ? 'selected' : 'secondary'}
          onClick={() => handleSortButtonClick(key as Sort)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};
