import styles from './index.module.scss';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'widgets/Catalog/store';
import { FilterFlags, FilterTypes } from 'features/ProductsFilters/types';
import { Typography } from 'shared/ui/Typography';
import { CheckBox } from 'shared/ui/CheckBox';
import { PayloadAction } from '@reduxjs/toolkit';
import { JSX, useMemo } from 'react';
import { useBreakpoint } from 'shared/hooks/useBreakpoints.ts';
import { Scrollbar } from 'shared/ui/ScrollBar';

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

  const hasSelectAll = Object.keys(filterFlags).length > 2;
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
      <Typography className={styles.filterCaption} variant={'h4'}>
        {title}
      </Typography>
      {hasSelectAll && (
        <CheckBox
          id={title + '_selectAll'}
          checked={isAllSelected}
          onChange={() => handleSelectAll()}
        >
          Выбрать все
        </CheckBox>
      )}
      <Scrollbar
        style={{ marginTop: hasSelectAll ? 12 : 16 }}
        maxHeight={useBreakpoint() === 'mobile' ? 167 : 137}
      >
        <ul className={styles.checkboxContainer}>
          {(Object.entries(filterFlags) as [T, boolean][]).map(([key, value]) => (
            <li key={key} className={styles.item}>
              <CheckBox id={key} checked={value} onChange={() => handleChange(key)}>
                {key}
              </CheckBox>
            </li>
          ))}
        </ul>
      </Scrollbar>
    </div>
  );
};
