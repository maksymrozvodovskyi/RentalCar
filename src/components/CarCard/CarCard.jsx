import css from "./CarCard.module.css";
import ReadMore from "../ReadMore/ReadMore";

export default function CarCard({ car }) {
  return (
    <div>
      <img
        src={car.img}
        alt={`${car.brand} ${car.model}`}
        className={css.img}
      />
      <div className={css.textWrapper}>
        <div className={css.descriptionWrapper}>
          <h3 className={css.name}>
            {car.brand} <span className={css.model}>{car.model}</span>,{" "}
            {car.year}
          </h3>
          <span className={css.rentalPrice}>${car.rentalPrice}</span>
        </div>
        <ul className={css.details}>
          <li>{car.address.split(",").slice(-2).join("")}</li>
          <li>{car.rentalCompany}</li>
          <li>{car.type}</li>
          <li>{car.mileage}</li>
        </ul>
        <ReadMore />
      </div>
    </div>
  );
}
