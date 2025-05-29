import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { useBreakpoint } from 'shared/hooks/useBreakpoints.ts';

import './styles/index.module.scss';

function App(): React.ReactElement {
  const breakpoint = useBreakpoint();

  useEffect(() => {
    const root = document.documentElement;

    switch (breakpoint) {
      case 'mobile':
        root.style.setProperty('--header-height', '64px');
        root.style.setProperty('--horizontal-content-padding', '4%');
        break;
      case 'tablet':
        root.style.setProperty('--header-height', '80px');
        root.style.setProperty('--horizontal-content-padding', '6%');
        break;
      case 'desktop':
      default:
        root.style.setProperty('--header-height', '80px');
        root.style.setProperty('--horizontal-content-padding', '12.5%');
        break;
    }
  }, [breakpoint]);

  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;
