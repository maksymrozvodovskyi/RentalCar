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
      <div className={css.overallWrapper}>
        <div className={css.imageWrapper}>
          <img width={640} height={512} src={car.img} className={css.img} />
        </div>
        <div className={css.wrapper}>
          <div className={css.infoWrapper}>
            <div className={css.mainInfo}>
              <h2 className={css.name}>
                {car.brand} {car.model}, {car.year}
              </h2>
              <span className={css.id}> Id: {car.id}</span>
            </div>
            <div className={css.carInfo}>
              <div className={css.cityWrapper}>
                <p className={css.city}>
                  <svg width={16} height={16} className={css.location}>
                    <use href="/public/icons.svg#icon-location"></use>
                  </svg>
                  {city}, {country}
                </p>
                <p className={css.city}>
                  Mileage: {formatMileage(car.mileage)}
                </p>
              </div>
              <p className={css.price}>${car.rentalPrice}</p>
            </div>
            <p className={css.desc}>{car.description}</p>
            <p></p>
          </div>
          <div className={css.overall}>
            <div className={css.conditions}>
              <h3 className={css.titte}>Rental Conditions: </h3>
              <div>
                <ul className={css.conditionsList}>
                  {car.rentalConditions.map((condition, key) => (
                    <li key={key}>
                      <svg width={16} height={16} className={css.checkCircle}>
                        <use href="/public/icons.svg#icon-check-circle"></use>
                      </svg>
                      {condition}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className={css.titte}>Car Specifications:</h3>
              <div>
                <ul className={css.specifications}>
                  <li>
                    <svg width={16} height={16} className={css.checkCircle}>
                      <use href="/public/icons.svg#icon-calendar"></use>
                    </svg>
                    Year: {car.year}
                  </li>
                  <li>
                    <svg width={16} height={16} className={css.checkCircle}>
                      <use href="/public/icons.svg#icon-car"></use>
                    </svg>
                    Type: {car.type}
                  </li>
                  <li>
                    <svg width={16} height={16} className={css.checkCircle}>
                      <use href="/public/icons.svg#icon-fuel-pump"></use>
                    </svg>
                    Fuel Consumption: {car.fuelConsumption}
                  </li>
                  <li>
                    <svg width={16} height={16} className={css.checkCircle}>
                      <use href="/public/icons.svg#icon-gear"></use>
                    </svg>
                    Engine Size: {car.engineSize}
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className={css.titte}>Accessories and functionalities:</h3>
              <div className={css.acsAndFuncWrap}>
                <ul className={css.acsAndFuncList}>
                  {car.accessories.map((accessorie, key) => (
                    <li key={key}>
                      <svg width={16} height={16} className={css.checkCircle}>
                        <use href="/public/icons.svg#icon-check-circle"></use>
                      </svg>
                      {accessorie}
                    </li>
                  ))}
                </ul>
                <ul className={css.acsAndFuncList}>
                  {car.functionalities.map((functionality, key) => (
                    <li key={key}>
                      <svg width={16} height={16} className={css.checkCircle}>
                        <use href="/public/icons.svg#icon-check-circle"></use>
                      </svg>
                      {functionality}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
