import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import '@/styles/global.css';
import Contact, { loader as contactLoader } from './routes/Contact';
import ContactEdit, { action as contactEditAction } from './routes/ContactEdit';
import RootLayout, {
  loader as rootLoader,
  action as rootAction,
} from '@/routes/RootLayout';
import NotFound from './routes/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: '/contacts/:contactId',
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: '/contacts/:contactId/edit',
        element: <ContactEdit />,
        loader: contactLoader,
        action: contactEditAction,
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
