import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledHeader } from './Layout.styled';

const Layout = ({ children }) => {
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
      <main>{children}</main>
    </div>
  );
};
export default Layout;
