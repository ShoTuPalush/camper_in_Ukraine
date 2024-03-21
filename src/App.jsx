import { Route, Routes } from 'react-router-dom';
import { SharedLayot } from './components/SharedLayout/SharedLayout';
import { lazy, useEffect } from 'react';
import { featchAdver, featchAllAdver } from './redux/catalog/operation';
import { useDispatch } from 'react-redux';

const HomePage = lazy(() => import('./pages/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(featchAllAdver());
    dispatch(featchAdver());
  }, [dispatch]);
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
