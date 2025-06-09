import { FC } from 'react';
import styles from './index.module.scss';
import { NAV_BANNERS } from './constants';
import { NavBannerItem } from 'widgets/NavBanners/components/NavBannerItem';
import { useBreakpoint } from 'shared/context/BreakpointContext.tsx';

export const NavBanners: FC = () => {
  const breakpoint = useBreakpoint();
  return (
    <div
      className={styles.navBanners}
      style={{ marginTop: breakpoint === 'mobile' ? '287px' : '48px' }}
    >
      {NAV_BANNERS.map((slide, index) => (
        <NavBannerItem key={index} item={slide} />
      ))}
    </div>
  );
};
