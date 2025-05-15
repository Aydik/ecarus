import { FC } from 'react';
import { SlideItem as SlideItemType } from '../../types';
import styles from './index.module.scss';
import { Typography } from 'shared/ui/Typography';
import { Button } from 'shared/ui/Button';

interface Props {
  item: SlideItemType;
}

export const SlideItem: FC<Props> = ({ item }) => {
  return (
    <div
      className={styles.slideItem}
      style={{
        backgroundColor: item.backgroundColor,
        backgroundImage: item.backgroundImage
          ? `url(/assets/images/bannerBackgrounds/${item.backgroundImage})`
          : 'none',
        backgroundSize: item.backgroundSize || '560px 320px',
        backgroundPosition: item.backgroundPosition || 'top right',
      }}
    >
      <div className={styles.content}>
        <div>
          <Typography variant={'h1'}>{item.title}</Typography>
          <Typography className={styles.description} variant={'p'}>
            {item.description}
          </Typography>
        </div>
        <Button className={styles.button} style={'primary'}>
          {item.buttonText}
        </Button>
      </div>
    </div>
  );
};
