import { Outlet, useLocation } from 'react-router-dom';
import './Root.less';
import Navbar from './Navbar';

export default function Root() {
  const location = useLocation();

  return (
    <>
      <main>
        {location.pathname !== '/checkout' && <Navbar />}
        <Outlet />
      </main>
    </>
  );
}