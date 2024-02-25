import { NavLink } from "react-router-dom";
import { nav, ctaLink } from "./PageNav.module.css";
import Logo from "./Logo";

function PageNav() {
  return (
    <nav className={nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/pricing">Princing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={ctaLink}>
            LogIn
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
