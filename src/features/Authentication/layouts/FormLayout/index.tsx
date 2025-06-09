import { FC, ReactNode } from 'react';
import styles from './index.module.scss';
import { useBreakpoint } from 'shared/context/BreakpointContext.tsx';

interface Props {
  children: ReactNode;
}

export const FormLayout: FC<Props> = ({ children }) => {
  const breakpoint = useBreakpoint();
  return (
    <div className={styles.layout} style={{ width: breakpoint !== 'desktop' ? '100%' : '384px' }}>
      {children}
    </div>
  );
};
