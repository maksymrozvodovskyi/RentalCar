import css from "./CarCard.module.css";
import ReadMore from "../ReadMore/ReadMore";
import formatMileage from "../../utils/formatMileage.js";
import parseAddress from "../../utils/parseAddress.js";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { selectFavorites } from "../../redux/favoritesCars/selectors.js";
import { toggleFavorite } from "../../redux/favoritesCars/slice.js";

export default function CarCard({ car }) {
  const { city, country } = parseAddress(car.address);
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorites = useMemo(
    () => favorites.some((item) => item.id === car.id),
    [favorites, car.id]
  );

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(car));
  };

  return (
    <div>
      <div className={css.imgWrapper}>
        <img
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          className={css.img}
        />
        <button className={css.favoriteBtn} onClick={handleFavoriteClick}>
          <svg width="16" height="16">
            <use
              href={
                isFavorites
                  ? "/icons.svg#icon-heart-fill"
                  : "/icons.svg#icon-heart"
              }
            ></use>
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
          <li>
            <span>{city}</span>
            <svg width="2" height="16" className={css.line}>
              <use href="/icons.svg#icon-line"></use>
            </svg>
            <span>{country}</span>
            <svg width="2" height="16" className={css.line}>
              <use href="/icons.svg#icon-line"></use>
            </svg>
            <span>{car.rentalCompany}</span>
            <svg width="2" height="16" className={css.line}>
              <use href="/icons.svg#icon-line"></use>
            </svg>
          </li>
          <li>
            <span>{car.type}</span>
            <svg width="2" height="16" className={css.line}>
              <use href="/icons.svg#icon-line"></use>
            </svg>
            <span>{formatMileage(car.mileage)}</span>
          </li>
        </ul>
        <ReadMore />
      </div>
    </div>
  );
}
