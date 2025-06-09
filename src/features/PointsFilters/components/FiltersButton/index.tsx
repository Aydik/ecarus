import { FC, ReactNode, useState } from 'react';
import { Icon } from 'shared/ui/Icon/Icon.tsx';
import { SwipeableFilters } from 'features/PointsFilters/components/SwipeableFilters';
import styles from './index.module.scss';

interface Props {
  children?: ReactNode;
}

export const FiltersButton: FC<Props> = ({ children }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpened((prev) => !prev);
  };
  return (
    <div className={styles.container}>
      <button className={styles.filtersButton} onClick={handleClick}>
        <Icon name={'filters'} />
      </button>
      <SwipeableFilters isOpen={isOpened} onClose={() => setIsOpened(false)}>
        {children}
      </SwipeableFilters>
    </div>
  );
};
