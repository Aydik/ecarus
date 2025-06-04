import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { BreakpointProvider } from 'shared/context/BreakpointContext.tsx';

import './styles/index.module.scss';

function App(): React.ReactElement {
  return (
    <BreakpointProvider>
      <Router>
        <AppRouter />
      </Router>
    </BreakpointProvider>
  );
}

export default App;
