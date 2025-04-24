import { FC } from 'react';
import styles from './index.module.scss';
import { LinkLogo } from 'widgets/Header/ui/LinkLogo';
import { NavLink } from 'widgets/Header/ui/NavLink';
import { pages } from 'entities/nav/pages.ts';
import { useLocation } from 'react-router-dom';

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
      <div>Login</div>
    </header>
  );
};
