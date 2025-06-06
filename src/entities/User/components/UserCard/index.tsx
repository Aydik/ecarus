import { FC, useEffect, useState } from 'react';
import { getUser } from 'entities/User/services/user.servise.ts';
import styles from './index.module.scss';
import { Avatar } from 'entities/User/components/Avatar';
import { Typography } from 'shared/ui/Typography';
import { Button } from 'shared/ui/Button';
import { logout } from 'features/Authentication/services/auth.service.ts';
import { useNavigate } from 'react-router-dom';

export const UserCard: FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);

  useEffect(() => {
    getUser()
      .then((res) => {
        setEmail(res.email);
        setPhoto(res.photo_url);
      })
      .catch(() => {
        navigate('/');
      });
  }, [navigate]);

  if (email) {
    return (
      <div className={styles.container}>
        <Avatar size={128} src={photo} />
        <Typography variant={'p'} className={styles.email}>
          {email}
        </Typography>
        <Button variant={'secondary'} className={styles.button} onClick={logout}>
          Выйти из аккаунта
        </Button>
      </div>
    );
  }
};
