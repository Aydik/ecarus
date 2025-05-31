import { FC } from 'react';
import { SlideItem as SlideItemType } from '../../types';
import styles from './index.module.scss';
import { Typography } from 'shared/ui/Typography';
import { Button } from 'shared/ui/Button';
import { useBreakpoint } from 'shared/context/BreakpointContext.tsx';

interface Props {
  item: SlideItemType;
}

export const SlideItem: FC<Props> = ({ item }) => {
  const breakpoint = useBreakpoint();
  return (
    <div
      className={styles.slideItem}
      style={{
        backgroundColor: item.backgroundColor,
        backgroundImage: item.backgroundImage
          ? breakpoint === 'mobile'
            ? `linear-gradient(to bottom, ${item.backgroundColor} 50%, transparent 80%), url(/assets/images/bannerBackgrounds/${item.backgroundImage})`
            : `url(/assets/images/bannerBackgrounds/${item.backgroundImage})`
          : 'none',
        backgroundSize: breakpoint === 'mobile' ? '100% auto' : 'auto 100%',
        backgroundPosition: breakpoint === 'mobile' ? 'bottom' : 'right',
        paddingTop: breakpoint === 'mobile' ? '' : '56px',
        paddingLeft: breakpoint === 'mobile' ? '' : '64px',
        paddingRight: breakpoint === 'mobile' ? '' : '64px',
      }}
    >
      <div className={styles.content}>
        <div>
          <Typography variant={'h1'}>{item.title}</Typography>
          <Typography className={styles.description} variant={'p'}>
            {item.description}
          </Typography>
        </div>
        <Button
          className={styles.button}
          variant={'primary'}
          style={{
            marginTop: breakpoint === 'desktop' ? '40px' : '24px',
            width: breakpoint === 'mobile' ? '100%' : '',
          }}
        >
          {item.buttonText}
        </Button>
      </div>
    </div>
  );
};
