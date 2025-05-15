import { FC } from 'react';
import styles from './index.module.scss';
import { Icon } from 'shared/ui/Icon/Icon.tsx';
import { Typography } from 'shared/ui/Typography';

const CITY: string = 'Казань';

export const City: FC = () => {
  return (
    <div className={styles.city}>
      <Icon name={'pin'} />
      <Typography className={styles.name}>{CITY}</Typography>
    </div>
  );
};
