import { FC } from 'react';
import { Header } from 'widgets/Header';
import { Outlet } from 'react-router-dom';
import styles from './index.module.scss';

export const MapLayout: FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};
