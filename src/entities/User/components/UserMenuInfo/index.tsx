import { FC } from 'react';
import { Amount } from 'shared/ui/Amount';
import styles from './index.module.scss';
import { Avatar } from 'entities/User/components/Avatar';
import { Typography } from 'shared/ui/Typography';
import { useSelector } from 'react-redux';
import type { RootState } from 'app/store';

export const UserMenuInfo: FC = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const email = user ? user.email : '';
  const balance = user ? user.balance : 0;
  const photo = '';

  return (
    <div className={styles.wrapper}>
      <Avatar size={64} src={photo} />
      <div className={styles.info}>
        <Typography className={styles.name} variant={'p'}>
          {email}
        </Typography>
        <Amount amount={balance} />
      </div>
    </div>
  );
};
