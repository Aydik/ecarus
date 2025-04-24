import { useEffect, useState } from 'react';

const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
};

export type Breakpoint = 'mobile' | 'tablet' | 'desktop';

export const useBreakpoint = (): Breakpoint => {
  const getBreakpoint = (width: number): Breakpoint => {
    if (width < BREAKPOINTS.mobile) return 'mobile';
    if (width < BREAKPOINTS.tablet) return 'tablet';
    return 'desktop';
  };

  const [breakpoint, setBreakpoint] = useState<Breakpoint>(
    typeof window !== 'undefined' ? getBreakpoint(window.innerWidth) : 'desktop',
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setBreakpoint(getBreakpoint(width));
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
};
