import { FC } from 'react';
import styles from './index.module.scss';
import { Icon } from 'shared/ui/Icon/Icon.tsx';
import { Typography } from 'shared/ui/Typography';
import type { AppDispatch } from 'app/store';
import { setIsOpened } from 'features/Authentication/slice';
import { useDispatch } from 'react-redux';

export const LoginButton: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleClick = () => dispatch(setIsOpened(true));
  return (
    <>
      <button className={styles.loginButton} onClick={handleClick}>
        <Icon name={'login'} />
        <Typography className={styles.title}>Войти</Typography>
      </button>
    </>
  );
};
