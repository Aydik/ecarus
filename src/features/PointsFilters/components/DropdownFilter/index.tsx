import { Dispatch, FC, SetStateAction, useState } from 'react';
import './index.module.scss';
import { Filter } from 'shared/components/Filter';
import { FilterFlags } from 'shared/types';
import styles from './index.module.scss';
import { Typography } from 'shared/ui/Typography';
import { Icon } from 'shared/ui/Icon/Icon.tsx';
import clsx from 'clsx';

export interface Props {
  title: string;
  filterFlags: FilterFlags;
  setFilterFlags: Dispatch<SetStateAction<FilterFlags>>;
}

export const DropdownFilter: FC<Props> = ({ title, filterFlags, setFilterFlags }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className={styles.filter}>
      <button className={styles.button} onClick={toggleDropdown}>
        <Typography className={styles.title}>{title}</Typography>
        <Icon
          name={'arrow_slide'}
          className={clsx(styles.arrow, isOpened && styles.arrow_active)}
        />
      </button>

      {isOpened && (
        <div className={styles.dropdown}>
          <Filter filterFlags={filterFlags} setFilterFlags={setFilterFlags} />
        </div>
      )}
    </div>
  );
};
