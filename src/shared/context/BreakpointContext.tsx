import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { setRootVariables } from 'shared/utils/setRootVariables.ts';

export type Breakpoint = 'mobile' | 'tablet' | 'desktop';

export const getBreakpoint: () => Breakpoint = () => {
  const width = window.innerWidth;
  if (width < 576) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

const BreakpointContext = createContext<Breakpoint>('desktop');

export const BreakpointProvider = ({ children }: { children: ReactNode }) => {
  const [breakpoint, setBreakpoint] = useState(getBreakpoint());

  useEffect(() => {
    const onResize = () => {
      setBreakpoint(getBreakpoint());
      setRootVariables(getBreakpoint());
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return <BreakpointContext.Provider value={breakpoint}>{children}</BreakpointContext.Provider>;
};

export const useBreakpoint = () => useContext(BreakpointContext);
