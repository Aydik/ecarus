import { FC, useEffect, useState } from 'react';
import { Modal } from 'shared/ui/Modal';
import styles from './index.module.scss';
import { NavigationMobile } from 'widgets/Header/components/NavigationMobile';
import { City } from 'entities/City';
import { LoginButton } from 'widgets/Header/components/LoginButton';
import { UserMenuInfo } from 'entities/User/components/UserMenuInfo';
import { logout } from 'features/Authentication/services/auth.service.ts';
import { Typography } from 'shared/ui/Typography';
import Cookies from 'js-cookie';

interface Props {
  isOpened: boolean;
  onClose: () => void;
}

export const Menu: FC<Props> = ({ isOpened, onClose }) => {
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const token = Cookies.get('accessToken');
    setHasToken(!!token);
  }, []);

  return (
    <Modal isOpened={isOpened} onClose={onClose}>
      <div className={styles.layout}>
        {hasToken && <UserMenuInfo />}
        <NavigationMobile onNavigate={onClose} />
        <div className={styles.info}>
          <City />
          {hasToken ? (
            <button className={styles.logout} onClick={logout}>
              <Typography>Выйти</Typography>
            </button>
          ) : (
            <LoginButton />
          )}
        </div>
      </div>
    </Modal>
  );
};
