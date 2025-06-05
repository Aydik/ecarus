import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { BreakpointProvider, getBreakpoint } from 'shared/context/BreakpointContext.tsx';

import './styles/index.module.scss';
import { setRootVariables } from 'shared/utils/setRootVariables.ts';

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
