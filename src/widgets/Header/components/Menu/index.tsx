import { FC, useEffect, useState } from 'react';
import { Modal } from 'shared/ui/Modal';
import styles from './index.module.scss';
import { NavigationMobile } from 'widgets/Header/components/NavigationMobile';
import { City } from 'entities/City';
import { LoginButton } from 'widgets/Header/components/LoginButton';
import { UserMenuInfo } from 'entities/User/components/UserMenuInfo';
import { logout } from 'features/Authentication/services/auth.service.ts';
import { Typography } from 'shared/ui/Typography';
import { getUser } from 'entities/User';
import { useNavigate } from 'react-router-dom';

interface Props {
  isOpened: boolean;
  onClose: () => void;
}

export const Menu: FC<Props> = ({ isOpened, onClose }) => {
  const navigate = useNavigate();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    getUser().then(() => setAuthorized(true));
  }, []);

  return (
    <Modal isOpened={isOpened} onClose={onClose}>
      <div className={styles.layout}>
        {authorized && (
          <button
            onClick={() => {
              navigate('/profile');
              onClose();
            }}
            className={styles.profileButton}
          >
            <UserMenuInfo />
          </button>
        )}
        <NavigationMobile onNavigate={onClose} />
        <div className={styles.info}>
          <City />
          {authorized ? (
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
