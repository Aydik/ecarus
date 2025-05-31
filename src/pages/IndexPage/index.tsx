import { FC } from 'react';
import { SlideBanner } from 'widgets/SlideBanner';
import { NavBanners } from 'widgets/NavBanners';

export const IndexPage: FC = () => {
  return (
    <>
      <SlideBanner />
      <NavBanners />
    </>
  );
};
