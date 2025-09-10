import { Link, useNavigate } from "react-router-dom";
import css from "./Hero.module.css";
import container from "../../styles/container.module.css";

export default function Hero() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/catalog");
  };
  return (
    <section className={css.hero}>
      <div className={container.container}>
        <div className={css.wrapper}>
          <h1 className={css.title}>Find your perfect rental car</h1>
          <p className={css.description}>
            Reliable and budget-friendly rentals for any journey
          </p>
          <button className={css.link} onClick={handleClick}>
            View Catalog
          </button>
        </div>
      </div>
    </section>
  );
}
