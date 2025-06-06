import { FC } from 'react';
import { Typography } from 'shared/ui/Typography';
import styles from './index.module.scss';
import clsx from 'clsx';

interface Props {
  name: string;
  isSelected: boolean;
  onClick: () => void;
}

export const Tab: FC<Props> = ({ name, isSelected, onClick }) => {
  return (
    <button className={clsx(styles.tab, isSelected ? styles.tab_selected : '')} onClick={onClick}>
      <Typography className={styles.name}>{name}</Typography>
      {isSelected && <div className={styles.rectangle} />}
    </button>
  );
};
