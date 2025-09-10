import css from "./CarCard.module.css";
import ReadMore from "../ReadMore/ReadMore";
import formatMileage from "../../utils/formatMileage.js";
import parseAddress from "../../utils/parseAddress.js";

export default function CarCard({ car }) {
  const { city, country } = parseAddress(car.address);

  return (
    <div>
      <div className={css.imgWrapper}>
        <img
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          className={css.img}
        />
        <button className={css.favoriteBtn}>
          <svg width="16" height="16">
            <use href="/public/icons.svg#icon-heart"></use>
          </svg>
        </button>
      </div>
      <div className={css.textWrapper}>
        <div className={css.descriptionWrapper}>
          <h3 className={css.name}>
            {car.brand} <span className={css.model}>{car.model}</span>,{" "}
            {car.year}
          </h3>
          <span className={css.rentalPrice}>${car.rentalPrice}</span>
        </div>
        <ul className={css.details}>
          <li>{city}</li>
          <li>{country}</li>
          <li>{car.rentalCompany}</li>
          <li>{car.type}</li>
          <li>{formatMileage(car.mileage)}</li>
        </ul>
        <ReadMore />
      </div>
    </div>
  );
}
