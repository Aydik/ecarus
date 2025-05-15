import { useRoutes } from 'react-router-dom';
import { FC } from 'react';
import { RouteObject } from 'react-router-dom';
import { IndexPage } from 'pages/IndexPage';
import { AboutPage } from 'pages/AboutPage';
import { PointsPage } from 'pages/PointsPage';
import { MarketPage } from 'pages/MarketPage';
import { MainLayout } from 'app/layouts/MainLayout';

const routeConfig: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <IndexPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/points',
        element: <PointsPage />,
      },
      {
        path: '/market',
        element: <MarketPage />,
      },
    ],
  },
];

export const AppRouter: FC = () => useRoutes(routeConfig);
