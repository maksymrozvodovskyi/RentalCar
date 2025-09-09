import Logo from "../Logo/Logo";
import css from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className={css.header}>
      <Logo />
      <nav className={css.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? css.active : css.link)}
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) => (isActive ? css.active : css.link)}
        >
          Catalog
        </NavLink>
      </nav>
    </header>
  );
}
