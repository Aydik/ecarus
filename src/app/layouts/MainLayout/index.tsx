import { FC } from 'react';
import { Header } from 'widgets/Header';
import { Footer } from 'widgets/Footer';
import { Outlet } from 'react-router-dom';
import styles from './index.module.scss';
import { useBreakpoint } from 'shared/context/BreakpointContext.tsx';

export const MainLayout: FC = () => {
  const breakpoint = useBreakpoint();
  return (
    <div className={styles.mainLayout}>
      <Header />
      <main className={styles.main} style={breakpoint === 'mobile' ? { paddingTop: '24px' } : {}}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
