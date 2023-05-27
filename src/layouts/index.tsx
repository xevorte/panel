import * as COMPONENT from '../components';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className='min-h-screen flex flex-col font-manrope'>
      <COMPONENT.Header />
      <div className='flex flex-grow bg-slate-100'>
        <Outlet />
      </div>
      <COMPONENT.Footer />
    </div>
  );
}
