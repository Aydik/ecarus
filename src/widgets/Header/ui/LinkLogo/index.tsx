import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import { Icon } from 'shared/ui/Icon/Icon.tsx';

export const LinkLogo: FC = () => {
  return (
    <Link to={'/'} className={styles.linkLogo}>
      <Icon name={'ec'} size={{ width: 28, height: 16 }} className={styles.linkLogo__text} />
      <Icon name={'logo'} size={{ width: 24, height: 18 }} />
      <Icon name={'rus'} size={{ width: 46, height: 16 }} className={styles.linkLogo__text} />
    </Link>
  );
};
