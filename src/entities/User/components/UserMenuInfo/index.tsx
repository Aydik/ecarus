import { FC, useEffect, useState } from 'react';
import { Amount } from 'shared/ui/Amount';
import { getProfile } from 'entities/User/services/user.servise.ts';
import styles from './index.module.scss';
import { Avatar } from 'entities/User/components/Avatar';
import { Typography } from 'shared/ui/Typography';

export const UserMenuInfo: FC = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [userPhoto, setPhoto] = useState<string | null>(null);
  const [userBalance, setUserBalance] = useState<number | null>(null);

  useEffect(() => {
    getProfile().then((res) => {
      setUserName(res.firstname + ' ' + res.lastname);
      setPhoto(res.photo_url);
      setUserBalance(res.balance);
    });
  }, []);

  if (userName) {
    return (
      <div className={styles.layout}>
        <Avatar size={64} src={userPhoto} />
        <div className={styles.info}>
          <Typography className={styles.name} variant={'p'}>
            {userName}
          </Typography>
          <Amount amount={userBalance} />
        </div>
      </div>
    );
  }
};
