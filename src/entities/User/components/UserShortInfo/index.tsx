import { FC, useEffect, useState } from 'react';
import { Amount } from 'shared/ui/Amount';
import { getUser } from 'entities/User/services/user.servise.ts';
import styles from './index.module.scss';
import { Avatar } from 'entities/User/components/Avatar';
import { Typography } from 'shared/ui/Typography';
import { useNavigate } from 'react-router-dom';
import { useBreakpoint } from 'shared/context/BreakpointContext.tsx';

export const UserShortInfo: FC = () => {
  const breakpoint = useBreakpoint();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userPhoto, setPhoto] = useState<string | null>(null);
  const [userBalance, setUserBalance] = useState<number | null>(null);

  useEffect(() => {
    getUser().then((res) => {
      setUserEmail(res.email);
      setPhoto(res.photo_url);
      setUserBalance(res.balance);
    });
  }, []);

  if (userEmail) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: breakpoint === 'desktop' ? '24px' : '20px',
        }}
      >
        <Amount amount={userBalance} />
        {breakpoint === 'desktop' ? (
          <button className={styles.profileButton} onClick={() => navigate('/profile')}>
            <Avatar size={24} src={userPhoto} />
            <Typography className={styles.name}>{userEmail}</Typography>
          </button>
        ) : (
          <Avatar size={24} src={userPhoto} />
        )}
      </div>
    );
  }
};
