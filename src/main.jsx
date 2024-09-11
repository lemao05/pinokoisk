import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Mainpage from './pages/MainPage';
import FilmPage from './pages/FilmPage';
import FilmListPage from './pages/FilmListPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Mainpage />,
  },
  {
    path: 'films/:filmName',
    element: <FilmListPage />,
  },
  {
    path: 'films/:filmName/:filmId',
    element: <FilmPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
