import { FC } from 'react';
import styles from './index.module.scss';
import { LinkLogo } from 'widgets/Header/components/LinkLogo';
import { NavLink } from './components/NavLink';
import { pages } from 'widgets/Header/constants';
import { useLocation } from 'react-router-dom';
import { City } from 'src/entities/City';
import { LoginButton } from 'widgets/Header/components/LoginButton';

export const HeaderDesktop: FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isSelected = (path: string) => currentPath === path;

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
        <LoginButton />
      </div>
    </header>
  );
};
