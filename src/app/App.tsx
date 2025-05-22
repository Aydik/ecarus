import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';

import './styles/index.module.scss';

function App(): React.ReactElement {
  localStorage.setItem(
    'authToken',
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3OTgyNzkzNTIzNyIsImlhdCI6MTc0Nzg2NTc5MywiZXhwIjoxODcxMzE1NzkzfQ.1wG4cNuv8kdb_RqlM794OlK2UJLiK1bhp7WD7zC9rQw',
  );
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;
