import { CSSProperties, FC, ReactNode } from 'react';
import { useBreakpoint } from 'shared/context/BreakpointContext.tsx';

interface Props {
  children: ReactNode;
}

export const ProductGrid: FC<Props> = ({ children }) => {
  const breakpoint = useBreakpoint();
  const properties: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    rowGap: 48,
    columnGap: 24,
  };
  if (breakpoint === 'tablet') {
    properties.gridTemplateColumns = 'repeat(2, 1fr)';
  } else if (breakpoint === 'mobile') {
    properties.gridTemplateColumns = 'repeat(1, 1fr)';
    properties.rowGap = 32;
  }

  return <div style={properties}>{children}</div>;
};
