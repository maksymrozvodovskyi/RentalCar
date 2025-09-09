import { Link } from "react-router-dom";
import css from "./Logo.module.css";

export default function Logo() {
  return (
    <>
      <Link to="/">
        <svg className={css.logo}>
          <use href="/public/icons.svg#icon-logo" />
        </svg>
      </Link>
    </>
  );
}
