import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import '@/styles/global.css';
import App from '@/app/App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

const container = document.getElementById('root') as HTMLElement;

createRoot(container).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
