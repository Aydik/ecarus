import { FC } from 'react';
import { Amount } from 'shared/ui/Amount';
import styles from './index.module.scss';
import { Avatar } from 'entities/User/components/Avatar';
import { Typography } from 'shared/ui/Typography';
import { useNavigate } from 'react-router-dom';
import { useBreakpoint } from 'shared/context/BreakpointContext.tsx';
import { useSelector } from 'react-redux';
import type { RootState } from 'app/store';

export const UserShortInfo: FC = () => {
  const breakpoint = useBreakpoint();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user.user);
  const email = user ? user.email : '';
  const balance = user ? user.balance : 0;
  const photo = '';

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: breakpoint === 'desktop' ? '24px' : '20px',
      }}
    >
      <Amount amount={balance} />
      {breakpoint === 'desktop' ? (
        <button className={styles.profileButton} onClick={() => navigate('/profile')}>
          <Avatar size={24} src={photo} />
          <Typography className={styles.name}>{email}</Typography>
        </button>
      ) : (
        <Avatar size={24} src={photo} />
      )}
    </div>
  );
};
