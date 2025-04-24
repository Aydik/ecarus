import { FC } from 'react';
import { useBreakpoint } from 'shared/lib/hooks/useBreakpoints.ts';
import { HeaderMobile } from './components/HeaderMobile';
import { HeaderDesktop } from './components/HeaderDesktop';

export const Header: FC = () => {
  const breakpoint = useBreakpoint();
  return breakpoint === 'mobile' ? <HeaderMobile /> : <HeaderDesktop />;
};
