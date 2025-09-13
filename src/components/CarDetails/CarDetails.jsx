import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCarById } from "../../redux/cars/operations";
import { selectCurrentCar, selectIsLoading } from "../../redux/cars/selectors";
import parseAddress from "../../utils/parseAddress.js";
import css from "./CarDetails.module.css";
import container from "../../styles/container.module.css";
import formatMileage from "../../utils/formatMileage.js";

export default function CarDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const car = useSelector(selectCurrentCar);

  useEffect(() => {
    if (id) {
      dispatch(getCarById(id));
    }
  }, [dispatch, id]);

  if (!car) {
    return <p>Loading</p>;
  }

  const { city, country } = parseAddress(car.address);

  return (
    <div className={container.container}>
      {/* <div>
        <img width={640} height={512} src={car.img} className={css.img} />
      </div> */}
      <div className={css.infoWrapper}>
        <h2 className={css.name}>
          {car.brand} {car.model}, {car.year}
        </h2>
        <span className={css.id}> Id: {car.id}</span>
        <div>
          <svg width={16} height={16}>
            <use href="/public/icons.svg#icon-location"></use>
          </svg>
          <p className={css.city}>
            {city}, {country}
          </p>
          <p className={css.city}>Mileage: {formatMileage(car.mileage)}</p>
          <p className={css.price}>${car.rentalPrice}</p>
        </div>
        <p className={css.desc}>{car.description}</p>
        <p></p>
      </div>
      <div>
        <div>
          <h3></h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
