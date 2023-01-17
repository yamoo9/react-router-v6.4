import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import '@/styles/global.css';
import Contact, { loader as contactLoader } from './routes/Contact';
import ContactEdit, { action as contactEditAction } from './routes/ContactEdit';
import { action as destoryAction } from './routes/ContactDestory';
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
      {
        path: '/contacts/:contactId/destory',
        action: destoryAction,
        errorElement: <div role="alert">Oops! There was an error.</div>,
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
