import { FC } from 'react';
import styles from './index.module.scss';
import { SplitLayout } from 'shared/layout/SplitLayout';
import { Typography } from 'shared/ui/Typography';
import { UserCard } from 'entities/User/components/UserCard';

export const ProfilePage: FC = () => {
  return (
    <div className={styles.profilePage}>
      <Typography variant={'h2'}>Личный кабинет</Typography>
      <SplitLayout>
        <UserCard />
      </SplitLayout>
    </div>
  );
};
