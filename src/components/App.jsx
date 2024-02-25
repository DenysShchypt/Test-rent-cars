import React from 'react';
import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('pages/Home/Home'));
const CatalogPage = lazy(() => import('pages/Catalog/Catalog'));
const FavoritesPage = lazy(() => import('pages/Favorites/Favorites'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
