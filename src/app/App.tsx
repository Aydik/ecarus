import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';

import './styles/index.module.scss';
import { Provider } from 'react-redux';
import { store } from './store';

function App(): React.ReactElement {
  return (
    <Router>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </Router>
  );
}

export default App;
