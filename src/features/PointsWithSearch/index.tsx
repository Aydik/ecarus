import { ChangeEvent, FC, useState } from 'react';

export const PointsWithSearch: FC = () => {
  const [searchBarValue, setSearchBarValue] = useState<string>('');

  const handleChangeSearchBarValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchBarValue(e.target.value);
  };
  return null;
};
