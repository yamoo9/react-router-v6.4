import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import '@/styles/global.css';
import RootLayout, { loader as rootLoader } from '@/routes/RootLayout';
import NotFound from './pages/NotFound';
import Contact from './routes/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    loader: rootLoader,
    children: [
      {
        path: '/contacts/:contactId',
        element: <Contact />,
      },
    ],
  },
]);

const container = document.getElementById('root') as HTMLElement;

createRoot(container).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
