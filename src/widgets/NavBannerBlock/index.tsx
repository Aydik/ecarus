import { FC } from 'react';
import styles from './index.module.scss';
import { NAV_BANNERS } from './constants';
import { NavBanner } from 'widgets/NavBannerBlock/components/NavBanner';

export const NavBannerBlock: FC = () => {
  return (
    <div className={styles.navBannerBlock}>
      {NAV_BANNERS.map((slide, index) => (
        <NavBanner key={index} item={slide} />
      ))}
    </div>
  );
};
