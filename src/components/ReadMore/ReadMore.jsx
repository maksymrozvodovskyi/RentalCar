import { Link } from "react-router-dom";
import css from "./ReadMore.module.css";

export default function ReadMore({ id }) {
  return (
    <Link to={`/catalog/${id}`} className={css.readMore}>
      Read more
    </Link>
  );
}
