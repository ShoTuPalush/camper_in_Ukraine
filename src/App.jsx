import { Route, Routes } from 'react-router-dom';
import { SharedLayot } from './components/SharedLayout/SharedLayout';
import { lazy } from 'react';

const HomePage = lazy(() => import('./pages/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayot />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
