// import { lazy } from 'react';
import Catalog from 'pages/Catalog/Catalog';
import Favorites from 'pages/Favorites';
import Home from 'pages/Home';
import { NavLink, Routes, Route } from 'react-router-dom';
import { StyledHeader } from './App.styled';
// const HomePage = lazy(() => import('../pages/Home'));
// const CatalogPage = lazy(() => import('../pages/Catalog'));
// const FavoritesPage = lazy(() => import('../pages/Favorites'));
export const App = () => {
  return (
    <div>
      <StyledHeader>
        <NavLink className="headerLink" to="/">
          Home
        </NavLink>
        <NavLink className="headerLink" to="/catalog">
          Catalog
        </NavLink>
        <NavLink className="headerLink" to="/favorites">
          Favorites
        </NavLink>
      </StyledHeader>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
};
