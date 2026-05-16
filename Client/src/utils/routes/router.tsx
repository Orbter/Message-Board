import { createBrowserRouter, Navigate } from 'react-router-dom';
import LoginPage from '@/pages/LoginPage';
import MainPage from '@/pages/MainPage';
export const router = createBrowserRouter([
  { path: '/', element: <Navigate to='/login' replace /> },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/home-screen',
    element: <MainPage />,
  },
]);
