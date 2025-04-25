import { FC } from 'react';
import { useBreakpoint } from 'shared/lib/hooks/useBreakpoints.ts';
import { HeaderMobile } from './variants/HeaderMobile';
import { HeaderDesktop } from './variants/HeaderDesktop';

export const Header: FC = () => {
  const breakpoint = useBreakpoint();
  return breakpoint === 'mobile' ? <HeaderMobile /> : <HeaderDesktop />;
};
