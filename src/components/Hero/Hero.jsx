import { Link } from "react-router-dom";
import css from "./Hero.module.css";
import container from "../../styles/container.module.css";

export default function Hero() {
  return (
    <section className={css.hero}>
      <div className={container.container}>
        <div className={css.wrapper}>
          <h1 className={css.title}>Find your perfect rental car</h1>
          <p className={css.description}>
            Reliable and budget-friendly rentals for any journey
          </p>
          <Link to="/catalog" className={css.link}>
            View Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}
