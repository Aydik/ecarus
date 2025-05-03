import { FC } from 'react';
import { INavBanner } from '../../model/types';
import styles from './index.module.scss';
import { Typography } from 'shared/ui/Typography';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon/Icon.tsx';

interface Props {
  item: INavBanner;
}

export const NavBanner: FC<Props> = ({ item }) => {
  return (
    <div
      className={styles.navBanner}
      style={{
        backgroundImage: item.backgroundImage
          ? `url(/assets/images/bannerBackgrounds/${item.backgroundImage})`
          : 'none',
        backgroundSize: item.backgroundSize || '300px 300px',
        backgroundPosition: item.backgroundPosition || 'top right',
      }}
    >
      <div className={styles.content}>
        <div>
          <Typography variant={'h3'}>{item.title}</Typography>
          <Typography className={styles.description} variant={'p'}>
            {item.description}
          </Typography>
        </div>
        <Button className={styles.button} style={'secondary'}>
          <Icon name={'arrow'} />
        </Button>
      </div>
    </div>
  );
};
