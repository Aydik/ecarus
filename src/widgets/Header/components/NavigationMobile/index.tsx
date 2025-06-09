import styles from './index.module.scss';
import { PAGES } from 'widgets/Header/constants';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'shared/ui/Typography';

interface NavigationMobileProps {
  onNavigate: () => void;
}

export const NavigationMobile: FC<NavigationMobileProps> = ({ onNavigate }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {PAGES.map((page) => (
          <li key={page.url}>
            <Link to={page.url} className={styles.link} onClick={onNavigate}>
              <Typography className={styles.text}>{page.text}</Typography>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
