import { FC, useEffect, useState } from 'react';
import { Amount } from 'shared/ui/Amount';
import { getUser } from 'entities/User/services/user.servise.ts';
import styles from './index.module.scss';
import { Avatar } from 'entities/User/components/Avatar';
import { Typography } from 'shared/ui/Typography';

export const UserMenuInfo: FC = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userPhoto, setPhoto] = useState<string | null>(null);
  const [userBalance, setUserBalance] = useState<number | null>(null);

  useEffect(() => {
    getUser().then((res) => {
      setUserEmail(res.email);
      setPhoto(res.photo_url);
      setUserBalance(res.balance);
    });
  }, []);

  if (userEmail) {
    return (
      <div className={styles.layout}>
        <Avatar size={64} src={userPhoto} />
        <div className={styles.info}>
          <Typography className={styles.name} variant={'p'}>
            {userEmail}
          </Typography>
          <Amount amount={userBalance} />
        </div>
      </div>
    );
  }
};
