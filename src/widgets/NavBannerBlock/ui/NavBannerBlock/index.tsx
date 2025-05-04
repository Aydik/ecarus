import { FC } from 'react';
import styles from './index.module.scss';
import { NAV_BANNERS } from '../../model/constants.ts';
import { NavBanner } from 'widgets/NavBannerBlock/ui/NavBanner';

export const NavBannerBlock: FC = () => {
  return (
    <div className={styles.navBannerBlock}>
      {NAV_BANNERS.map((slide, index) => (
        <NavBanner key={index} item={slide} />
      ))}
    </div>
  );
};
