import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from '../Header/Header';
import { Toaster } from 'react-hot-toast';

export const SharedLayot = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
        <Toaster />
      </main>
    </>
  );
};
