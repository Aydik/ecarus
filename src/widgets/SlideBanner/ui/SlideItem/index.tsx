import { FC } from 'react';
import { ISlideItem } from '../../model/types';
import styles from './index.module.scss';
import { Typography } from 'shared/ui/Typography';
import { Button } from 'shared/ui/Button';

interface Props {
  item: ISlideItem;
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
        backgroundSize: item.backgroundSize || 'cover',
        backgroundPosition: item.backgroundPosition || 'center',
      }}
    >
      <div className={styles.content}>
        <Typography className={styles.title} variant={'h1'}>
          {item.title}
        </Typography>
        <Typography className={styles.description} variant={'p'}>
          {item.description}
        </Typography>
        <Button className={styles.button}>{item.buttonText}</Button>
      </div>
    </div>
  );
};
