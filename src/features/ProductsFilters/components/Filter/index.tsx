import styles from './index.module.scss';
// import { shallowEqual, useDispatch, useSelector } from 'react-redux';
// import { AppDispatch, RootState } from 'widgets/Catalog/store';
import { Typography } from 'shared/ui/Typography';
import { CheckBox } from 'shared/ui/CheckBox';
// import { useMemo } from 'react';
import { useBreakpoint } from 'shared/context/BreakpointContext.tsx';
import { Scrollbar } from 'shared/ui/ScrollBar';
import { FilterKind } from 'features/ProductsFilters/types';
// import { setGenres, setBrands, setCategories } from 'features/ProductsFilters/slices';
// import { c } from 'vite/dist/node/moduleRunnerTransport.d-DJ_mE5sf';

// const reducerMap: {
//   [K in FilterKind]: (
//     payload: FilterFlags<FilterTypeMap[K]>,
//   ) => ReturnType<typeof setGenres | typeof setCategories | typeof setBrands>;
// } = {
//   genders: setGenres,
//   categories: setCategories,
//   brands: setBrands,
// };
//
interface Props<K extends FilterKind> {
  title: string;
  filter: K;
}

export const Filter = <K extends FilterKind>({ title, filter }: Props<K>) => {
  // const dispatch: AppDispatch = useDispatch();
  //
  // const filterFlags = useSelector(
  //   (state: RootState) => state.filters[filter],
  //   shallowEqual,
  // ) as FilterFlags<FilterTypeMap[K]>;
  //
  // const reducer = reducerMap[filter];
  //
  // const hasSelectAll = Object.keys(filterFlags).length > 2;
  //
  // const isAllSelected = useMemo(
  //   (): boolean => Object.values(filterFlags).every((flag) => flag),
  //   [filterFlags],
  // );

  // const handleChange = (key: FilterTypeMap[K]) => {
  //   const updated: FilterFlags<FilterTypeMap[K]> = {
  //     ...filterFlags,
  //     [key]: !filterFlags[key],
  //   };
  //   dispatch(reducer(updated));
  // };

  // const handleSelectAll = () => {
  //   const updated: FilterFlags<FilterTypeMap[K]> = {} as FilterFlags<FilterTypeMap[K]>;
  //   for (const key of Object.keys(filterFlags) as Array<keyof FilterFlags<FilterTypeMap[K]>>) {
  //     updated[key] = !isAllSelected;
  //   }
  //   dispatch(reducer(updated));
  // };
  console.log(filter);
  const hasSelectAll = false;
  const isAllSelected = false;
  const filterFlags = [['фильтр', false]];
  return (
    <div className={styles.filter}>
      <Typography className={styles.filterCaption} variant={'h4'}>
        {title}
      </Typography>
      {hasSelectAll && (
        <CheckBox
          key={`${title}_selectAll_${isAllSelected}`}
          id={title + '_selectAll'}
          checked={isAllSelected}
          // onChange={handleSelectAll}
        >
          Выбрать все
        </CheckBox>
      )}
      <Scrollbar
        style={{ marginTop: hasSelectAll ? 12 : 16 }}
        maxHeight={useBreakpoint() === 'mobile' ? 167 : 137}
      >
        <ul className={styles.checkboxContainer}>
          {(Object.entries(filterFlags) as [string, boolean][]).map(([key, value]) => (
            <li key={key + value} className={styles.item}>
              <CheckBox
                id={key}
                checked={value}
                // onChange={() => handleChange(key as FilterTypeMap[K])}
              >
                {key}
              </CheckBox>
            </li>
          ))}
        </ul>
      </Scrollbar>
    </div>
  );
};
