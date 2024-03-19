import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const SharedLayot = () => {
  return (
    <>
      <header>
        <span>asd </span>
        <span>xcv</span>
      </header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
