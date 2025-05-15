import { FC } from 'react';
import { SlideBanner } from 'widgets/SlideBanner';
import { NavBannerBlock } from 'widgets/NavBannerBlock';

export const IndexPage: FC = () => {
  return (
    <>
      <SlideBanner />
      <NavBannerBlock />
    </>
  );
};
