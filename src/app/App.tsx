import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { BreakpointProvider, getBreakpoint } from 'shared/context/BreakpointContext.tsx';

import './styles/index.module.scss';
import { setRootVariables } from 'shared/utils/setRootVariables.ts';
import { Provider } from 'react-redux';
import { store } from 'app/store';

function App(): React.ReactElement {
  useEffect(() => {
    setRootVariables(getBreakpoint());
  }, []);
  return (
    <BreakpointProvider>
      <Provider store={store}>
        <Router>
          <AppRouter />
        </Router>
      </Provider>
    </BreakpointProvider>
  );
}

export default App;
