import { ReactElement, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { BreakpointProvider, getBreakpoint } from 'shared/context/BreakpointContext.tsx';

import './styles/index.module.scss';
import { setRootVariables } from 'shared/utils/setRootVariables.ts';
import { Provider, useDispatch } from 'react-redux';
import { AppDispatch, store } from 'app/store';
import { fetchCities } from 'entities/City/services/city.service.ts';
import { Authentication } from 'features/Authentication';
import { updateUser } from 'entities/User/slice';

function App(): ReactElement {
  return (
    <BreakpointProvider>
      <Provider store={store}>
        <AppWithData />
        <Authentication />
      </Provider>
    </BreakpointProvider>
  );
}

function AppWithData() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setRootVariables(getBreakpoint());
    dispatch(fetchCities());
    dispatch(updateUser());
  }, [dispatch]);

  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;
