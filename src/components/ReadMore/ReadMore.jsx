import { Link } from "react-router-dom";
import css from "./ReadMore.module.css";
import { useNavigate } from "react-router-dom";

export default function ReadMore({ id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/catalog/${id}`);
  };

  return (
    <button className={css.readMore} onClick={handleClick} id={id}>
      Read more
    </button>
  );
}
