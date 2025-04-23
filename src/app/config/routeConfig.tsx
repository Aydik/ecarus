import { RouteObject } from 'react-router-dom';
import { IndexPage } from 'pages/IndexPage';

export const routeConfig: RouteObject[] = [
  {
    path: '/',
    element: <IndexPage />,
  },
];
