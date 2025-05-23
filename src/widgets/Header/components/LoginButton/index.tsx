import { FC, useState } from 'react';
import styles from './index.module.scss';
import { Icon } from 'shared/ui/Icon/Icon.tsx';
import { Typography } from 'shared/ui/Typography';
import { Authentication } from 'features/Authentication';

export const LoginButton: FC = () => {
  const [isAuthModalOpened, setIsAuthModalOpened] = useState<boolean>(false);
  return (
    <>
      <button className={styles.loginButton} onClick={() => setIsAuthModalOpened(true)}>
        <Icon name={'login'} />
        <Typography className={styles.title}>Войти</Typography>
      </button>
      <Authentication isOpened={isAuthModalOpened} onClose={() => setIsAuthModalOpened(false)} />
    </>
  );
};
