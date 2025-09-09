import Logo from "../Logo/Logo";
import css from "./Header.module.css";
import container from "../../styles/container.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <Logo />
    </header>
  );
}
