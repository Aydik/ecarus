import { FC, useEffect, useState } from 'react';
import styles from './index.module.scss';
import { LinkLogo } from 'widgets/Header/components/LinkLogo';
import { City } from 'entities/City';
import { LoginButton } from 'widgets/Header/components/LoginButton';
import { UserShortInfo } from 'entities/User/components/UserShortInfo';
import { useBreakpoint } from 'shared/context/BreakpointContext.tsx';
import { NavigationDesktop } from 'widgets/Header/components/NavigationDesktop';
import { MenuButton } from 'widgets/Header/components/MenuButton';
import Cookies from 'js-cookie';

export const Header: FC = () => {
  const breakpoint = useBreakpoint();

  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const token = Cookies.get('accessToken');
    setHasToken(!!token);
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
        {hasToken ? <UserShortInfo /> : breakpoint === 'desktop' && <LoginButton />}
        {breakpoint !== 'desktop' && <MenuButton />}
      </div>
    </header>
  );
};
