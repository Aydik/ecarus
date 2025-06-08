import { FC, useCallback, useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Sort, SORT_TYPES } from 'features/ProductsSort/types';
import { Button } from 'shared/ui/Button';
import { deleteParam, setParam, useUrlParamsChange } from 'shared/utils/params.ts';
import { useNavigate } from 'react-router-dom';

export const ProductsSort: FC = () => {
  const [selectedSort, setSelectedSort] = useState<Sort>(null);

  const handleSortButtonClick = (key: Sort) =>
    setSelectedSort((prev) => (key === prev ? null : key));

  const handleUrlChange = useCallback((path: string) => {
    const searchParams = new URLSearchParams(path);
    const sortBy = searchParams.get('sortBy') as Sort | null;

    if (sortBy && sortBy in SORT_TYPES) {
      setSelectedSort((prev) => (prev !== sortBy ? sortBy : prev));
    } else {
      setSelectedSort((prev) => (prev !== null ? null : prev));
    }
  }, []);

  useUrlParamsChange(handleUrlChange);

  const navigate = useNavigate();

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
