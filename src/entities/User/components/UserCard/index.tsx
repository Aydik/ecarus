import { FC, useEffect } from 'react';
import styles from './index.module.scss';
import { Avatar } from 'entities/User/components/Avatar';
import { Typography } from 'shared/ui/Typography';
import { Button } from 'shared/ui/Button';
import { logout } from 'features/Authentication/services/auth.service.ts';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from 'app/store';
import { setIsOpened } from 'features/Authentication/slice';
import { logout as logoutAction } from 'entities/User/slice';

export const UserCard: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
  const user = useSelector((state: RootState) => state.user.user);
  const email = user ? user.email : '';
  const photo = '';

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
      dispatch(setIsOpened(true));
    }
  }, [dispatch, isAuthenticated, navigate]);

  const handleLogout = () => {
    dispatch(logoutAction());
    logout();
  };

  if (email) {
    return (
      <div className={styles.wrapper}>
        <Avatar size={128} src={photo} />
        <Typography variant={'p'} className={styles.email}>
          {email}
        </Typography>
        <Button variant={'secondary'} className={styles.button} onClick={handleLogout}>
          Выйти из аккаунта
        </Button>
      </div>
    );
  }
};
