import { ChangeEvent, FC, useEffect, useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { StoreEntity } from 'app/models/generated';
import styles from './index.module.scss';

interface Props {
  points: StoreEntity[];
}

export const PointsWithSearch: FC<Props> = ({ points }) => {
  const [searchBarValue, setSearchBarValue] = useState<string>('');

  const handleChangeSearchBarValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchBarValue(e.target.value);
  };

  useEffect(() => {
    console.log(points);
  }, []);

  return (
    <div className={styles.container}>
      <SearchBar value={searchBarValue} handleChange={handleChangeSearchBarValue} />
    </div>
  );
};
