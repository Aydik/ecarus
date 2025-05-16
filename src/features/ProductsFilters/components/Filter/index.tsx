import styles from './index.module.scss';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'widgets/Catalog/store';
import { FilterFlags, FilterTypes } from 'features/ProductsFilters/types';
import { Typography } from 'shared/ui/Typography';
import { CheckBox } from 'shared/ui/CheckBox';
import { PayloadAction } from '@reduxjs/toolkit';
import { JSX, useMemo } from 'react';

interface Props<T extends FilterTypes> {
  title: string;
  filterFlags: FilterFlags<T>;
  reducer: (updatedFlags: FilterFlags<T>) => PayloadAction<FilterFlags<T>>;
}

export const Filter = <T extends FilterTypes>({
  title,
  filterFlags,
  reducer,
}: Props<T>): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();

  const hasSelectAll = title !== 'Пол';
  const isAllSelected = useMemo(() => {
    return (Object.values(filterFlags) as boolean[]).every((flag) => flag);
  }, [filterFlags]);

  const handleChange = (key: T) => {
    const updated: FilterFlags<T> = {
      ...filterFlags,
      [key]: !filterFlags[key],
    };
    dispatch(reducer(updated));
  };

  const handleSelectAll = () => {
    const updated: FilterFlags<T> = {} as FilterFlags<T>;
    for (const key of Object.keys(filterFlags) as T[]) {
      updated[key] = !isAllSelected;
    }
    dispatch(reducer(updated));
  };

  return (
    <div className={styles.filter}>
      <Typography className={styles.filterCaption}>{title}</Typography>
      <ul
        className={styles.checkboxContainer}
        style={{ marginTop: hasSelectAll ? '12px' : '16px' }}
      >
        {hasSelectAll && (
          <li key={'all'} className={styles.item}>
            <CheckBox
              id={'selectAll ' + title}
              checked={isAllSelected}
              onChange={() => handleSelectAll()}
            >
              Выбрать все
            </CheckBox>
          </li>
        )}
        {(Object.entries(filterFlags) as [T, boolean][]).map(([key, value]) => (
          <li key={key} className={styles.item}>
            <CheckBox id={key} checked={value} onChange={() => handleChange(key)}>
              {key}
            </CheckBox>
          </li>
        ))}
      </ul>
    </div>
  );
};
