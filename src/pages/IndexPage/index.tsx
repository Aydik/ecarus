import { FC } from 'react';
import { SlideBanner } from 'widgets/SlideBanner/ui/SlideBanner';
import { NavBannerBlock } from 'widgets/NavBannerBlock/ui/NavBannerBlock';

export const IndexPage: FC = () => {
  return (
    <>
      <SlideBanner />
      <NavBannerBlock />
    </>
  );
};
