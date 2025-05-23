import { FC, useEffect, useState } from 'react';
import { getProfile } from 'entities/User/services/user.servise.ts';
import styles from './index.module.scss';
import { Avatar } from 'entities/User/components/Avatar';
import { Typography } from 'shared/ui/Typography';
import { Button } from 'shared/ui/Button';
import { formatPhone } from 'shared/utils/phoneFormatter.ts';

export const UserCard: FC = () => {
  const [firstname, setFirstname] = useState<string | null>(null);
  const [lastname, setLastname] = useState<string | null>(null);
  const [phone, setPhone] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);

  useEffect(() => {
    getProfile().then((res) => {
      setFirstname(res.firstname);
      setLastname(res.lastname);
      setPhone(res.phone_number);
      setEmail(res.email);
      setPhoto(res.photo_url);
    });
  }, []);

  if (firstname) {
    return (
      <div className={styles.container}>
        {firstname && (
          <>
            <Avatar size={128} src={photo} />
            <div className={styles.info}>
              <Typography variant={'p'} className={styles.name}>
                {firstname} {lastname}
              </Typography>
              <div className={styles.contacts}>
                <Typography variant={'p'} className={styles.contact}>
                  {formatPhone(phone as string)}
                </Typography>
                <Typography variant={'p'} className={styles.contact}>
                  {email}
                </Typography>
              </div>
            </div>
            <Button style={'secondary'} className={styles.button}>
              Выйти из аккаунта
            </Button>
          </>
        )}
        {!firstname && 'Загрузка профиля'}
      </div>
    );
  }
};
