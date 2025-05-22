import { FC } from 'react';
import styles from './index.module.scss';
import { Icon } from 'shared/ui/Icon/Icon.tsx';
import { Typography } from 'shared/ui/Typography';

interface Props {
  amount: number | null;
}

export const Amount: FC<Props> = ({ amount }) => {
  return (
    <div className={styles.amountContainer}>
      <Icon name={'coin'} />
      <Typography className={styles.amount}>{amount || 0}</Typography>
    </div>
  );
};
