import { FC } from 'react';
import styles from './index.module.scss';
import { SplitLayout } from 'shared/layout/SplitLayout';
import { Typography } from 'shared/ui/Typography';
import { UserCard } from 'entities/User/components/UserCard';
import { Tabs } from 'widgets/Tabs';
import { useBreakpoint } from 'shared/context/BreakpointContext.tsx';

export const ProfilePage: FC = () => {
  const isMobile = useBreakpoint() === 'mobile';
  return (
    <div className={styles.profilePage}>
      <Typography variant={'h2'}>Личный кабинет</Typography>
      {isMobile ? (
        <>
          <div className={styles.userCardContainer}>
            <UserCard />
          </div>
          <Tabs />
        </>
      ) : (
        <SplitLayout>
          <div>
            <UserCard />
          </div>
          <Tabs />
        </SplitLayout>
      )}
    </div>
  );
};
