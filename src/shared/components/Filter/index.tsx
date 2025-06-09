import styles from './index.module.scss';
import { Typography } from 'shared/ui/Typography';
import { CheckBox } from 'shared/ui/CheckBox';
import { useBreakpoint } from 'shared/context/BreakpointContext.tsx';
import { Scrollbar } from 'shared/ui/ScrollBar';
import { Dispatch, memo, SetStateAction, useEffect, useState } from 'react';
import { FilterFlags } from 'shared/types';
import { FilterSkeleton } from './ui/FilterSkeleton';

export interface Props {
  title?: string;
  filterFlags: FilterFlags;
  setFilterFlags: Dispatch<SetStateAction<FilterFlags>>;
}

const Filter = memo(function ({ title, filterFlags, setFilterFlags }: Props) {
  const hasSelectAll = Object.keys(filterFlags).length > 2;

  const [isAllSelected, setIsAllSelected] = useState<boolean>(false);

  useEffect(() => {
    setIsAllSelected(Object.values(filterFlags).every((flag) => flag));
  }, [filterFlags]);

  const handleChange = (key: string) => {
    const updated = { ...filterFlags, [key]: !filterFlags[key] };
    setFilterFlags(updated);
  };

  const handleSelectAll = () => {
    const updated: FilterFlags = {};
    for (const key of Object.keys(filterFlags)) {
      updated[key] = !isAllSelected;
    }
    setFilterFlags(updated);
  };

  const isMobile = useBreakpoint() === 'mobile';

  if (Object.keys(filterFlags).length === 0) {
    return <FilterSkeleton />;
  } else
    return (
      <div className={styles.filter}>
        {title && (
          <Typography className={styles.filterCaption} variant={'h4'}>
            {title}
          </Typography>
        )}
        {hasSelectAll && (
          <CheckBox
            key={`${title}_selectAll_${isAllSelected}`}
            id={title + '_selectAll'}
            checked={isAllSelected}
            onChange={handleSelectAll}
          >
            Выбрать все
          </CheckBox>
        )}
        <Scrollbar style={{ marginTop: hasSelectAll ? 12 : 16 }} maxHeight={isMobile ? 167 : 137}>
          <ul className={styles.checkboxContainer}>
            {Object.entries(filterFlags).map(([key, value]) => (
              <li key={`li_${key}_${value}`} className={styles.item}>
                <CheckBox key={`${key}_${value}`} id={key} checked={value} onChange={handleChange}>
                  {key}
                </CheckBox>
              </li>
            ))}
          </ul>
        </Scrollbar>
      </div>
    );
});
Filter.displayName = 'Filter';

export { Filter };
