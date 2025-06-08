import { FC } from 'react';
import { Modal } from 'shared/ui/Modal';
import styles from './index.module.scss';
import { NavigationMobile } from 'widgets/Header/components/NavigationMobile';
import { City } from 'entities/City';
import { LoginButton } from 'widgets/Header/components/LoginButton';
import { UserMenuInfo } from 'entities/User/components/UserMenuInfo';
import { logout } from 'features/Authentication/services/auth.service.ts';
import { Typography } from 'shared/ui/Typography';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from 'app/store';
import { logout as logoutAction } from 'entities/User/slice';

interface Props {
  isOpened: boolean;
  onClose: () => void;
}

export const Menu: FC<Props> = ({ isOpened, onClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

  const handleLogout = () => {
    dispatch(logoutAction());
    logout();
  };

  return (
    <Modal isOpened={isOpened} onClose={onClose}>
      <div className={styles.layout}>
        {isAuthenticated && (
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
          {isAuthenticated ? (
            <button className={styles.logout} onClick={handleLogout}>
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
