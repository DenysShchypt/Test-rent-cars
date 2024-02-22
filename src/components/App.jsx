import { NavLink } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </header>
    </div>
  );
};
