import css from "./CarCard.module.css";

export default function CarCard({ car }) {
  return (
    <div>
      <img src={car.img} className={css.img} />
      <div className={css.textWrapper}>
        <h3 className={css.name}>
          {car.brand} <span className={css.model}>{car.model}</span>, {car.year}
        </h3>
        <ul className={css.details}>
          <li>{car.address.split(",").slice(-2).join("")}</li>
          <li>{car.rentalCompany}</li>
          <li>{car.type}</li>
          <li>{car.mileage}</li>
        </ul>
      </div>
    </div>
  );
}
