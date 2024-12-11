import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
      <Outlet /> {/* Renderiza las rutas hijas */}
    </div>
  );
};

export default Layout;
