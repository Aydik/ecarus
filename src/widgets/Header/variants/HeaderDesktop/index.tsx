import { FC, useEffect, useState } from 'react';
import styles from './index.module.scss';
import { LinkLogo } from 'widgets/Header/components/LinkLogo';
import { NavLink } from './components/NavLink';
import { pages } from 'widgets/Header/constants';
import { useLocation } from 'react-router-dom';
import { City } from 'src/entities/City';
import { LoginButton } from 'widgets/Header/components/LoginButton';
import { ProfileButton } from 'entities/User/components/ProfileButton';

export const HeaderDesktop: FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isSelected = (path: string) => currentPath === path;

  const [userName, setUserName] = useState<string | null>(null);
  const [userPhoto, setPhoto] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const userData = localStorage.getItem('user');
      if (userData) {
        try {
          const parsed = JSON.parse(userData);
          setUserName(parsed.firstname);
          setPhoto(parsed.photo_url);
        } catch (e) {
          console.error('Ошибка при разборе user:', e);
        }
      }
    }
  }, []);

  return (
    <header className={styles.headerDesktop}>
      <nav className={styles.nav}>
        <LinkLogo />
        <ul className={styles.navList}>
          {pages.map((page) => (
            <li key={page.url} className={styles.navList__item}>
              <NavLink url={page.url} text={page.text} selected={isSelected(page.url)} />
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.info}>
        <City />
        {userName ? <ProfileButton src={userPhoto} firstName={userName} /> : <LoginButton />}
      </div>
    </header>
  );
};
