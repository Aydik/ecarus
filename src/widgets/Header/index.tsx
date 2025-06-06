import { FC, useEffect, useState } from 'react';
import styles from './index.module.scss';
import { LinkLogo } from 'widgets/Header/components/LinkLogo';
import { City } from 'entities/City';
import { LoginButton } from 'widgets/Header/components/LoginButton';
import { UserShortInfo } from 'entities/User/components/UserShortInfo';
import { useBreakpoint } from 'shared/context/BreakpointContext.tsx';
import { NavigationDesktop } from 'widgets/Header/components/NavigationDesktop';
import { MenuButton } from 'widgets/Header/components/MenuButton';
import { getUser } from 'entities/User';

export const Header: FC = () => {
  const breakpoint = useBreakpoint();

  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    getUser().then(() => setAuthorized(true));
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.links}>
        <LinkLogo />
        {breakpoint === 'desktop' && <NavigationDesktop />}
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: breakpoint === 'desktop' ? '48px' : '20px',
        }}
      >
        {breakpoint === 'desktop' && <City />}
        {authorized ? <UserShortInfo /> : breakpoint === 'desktop' && <LoginButton />}
        {breakpoint !== 'desktop' && <MenuButton />}
      </div>
    </header>
  );
};
