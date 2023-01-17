import { Detail, Sidebar } from '@/components';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <>
      <Sidebar />
      <Detail>
        <Outlet />
      </Detail>
    </>
  );
}
