import { FC } from 'react';
import { useBreakpoint } from 'shared/lib/hooks/useBreakpoints.ts';
import { HeaderMobile } from './ui/variants/HeaderMobile';
import { HeaderDesktop } from './ui/variants/HeaderDesktop';

export const Header: FC = () => {
  const breakpoint = useBreakpoint();
  return breakpoint === 'mobile' ? <HeaderMobile /> : <HeaderDesktop />;
};
