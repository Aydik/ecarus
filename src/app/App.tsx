import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { useBreakpoint } from 'shared/hooks/useBreakpoints.ts';
import { setRootVariables } from 'shared/utils/setRootVariables.ts';

import './styles/index.module.scss';

function App(): React.ReactElement {
  const breakpoint = useBreakpoint();

  useEffect(() => {
    setRootVariables(breakpoint);
  }, [breakpoint]);

  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;
