import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { setRootVariables } from 'shared/utils/setRootVariables.ts';
import { BreakpointProvider, getBreakpoint } from 'shared/context/BreakpointContext.tsx';

import './styles/index.module.scss';

function App(): React.ReactElement {
  useEffect(() => {
    setRootVariables(getBreakpoint());
  }, []);

  return (
    <BreakpointProvider>
      <Router>
        <AppRouter />
      </Router>
    </BreakpointProvider>
  );
}

export default App;
