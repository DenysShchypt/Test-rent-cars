import React from 'react';
// import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from 'pages/Home';
import Catalog from 'pages/Catalog/Catalog';
import Favorites from 'pages/Favorites';
// const HomePage = lazy(() => import('../pages/Home'));
// const CatalogPage = lazy(() => import('../pages/Catalog/Catalog'));
// const FavoritesPage = lazy(() => import('../pages/Favorites'));
export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
};
