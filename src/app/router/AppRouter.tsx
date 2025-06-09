import { useRoutes } from 'react-router-dom';
import { FC } from 'react';
import { RouteObject } from 'react-router-dom';
import { MainLayout } from 'app/layouts/MainLayout';
import { IndexPage } from 'pages/IndexPage';
import { AboutPage } from 'pages/AboutPage';
import { PointsPage } from 'pages/PointsPage';
import { MarketPage } from 'pages/MarketPage';
import { ProfilePage } from 'pages/ProfilePage';
import { MapLayout } from 'app/layouts/MapLayout';

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
        path: '/market',
        element: <MarketPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
    ],
  },
  {
    element: <MapLayout />,
    children: [
      {
        path: '/points',
        element: <PointsPage />,
      },
    ],
  },
];

export const AppRouter: FC = () => useRoutes(routeConfig);
