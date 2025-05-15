import { FC } from 'react';
import styles from './index.module.scss';
import { Icon } from 'shared/ui/Icon/Icon.tsx';
import { Typography } from 'shared/ui/Typography';

export const LoginButton: FC = () => {
  return (
    <button className={styles.loginButton}>
      <Icon name={'login'} />
      <Typography className={styles.title}>Войти</Typography>
    </button>
  );
};
