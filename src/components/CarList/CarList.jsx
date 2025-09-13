import { useDispatch, useSelector } from "react-redux";
import { selectAllCars, selectIsLoading } from "../../redux/cars/selectors";
import { useEffect } from "react";
import { getCars } from "../../redux/cars/operations";
import CarCard from "../CarCard/CarCard";
import css from "./CarList.module.css";
import container from "../../styles/container.module.css";
import LoadMore from "../LoadMore/LoadMore";
import { resetCars } from "../../redux/cars/slice";
import Loader from "../Loader/Loader";

export default function CarList({
  page = 1,
  limit = 12,
  brand,
  price,
  minMil,
  maxMil,
}) {
  const dispatch = useDispatch();
  const cars = useSelector(selectAllCars);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(resetCars());
    dispatch(getCars({ page, limit, brand, price, minMil, maxMil }));
  }, [dispatch, page, limit, brand, price, minMil, maxMil]);

  return (
    <section className={css.section}>
      <div className={container.container}>
        {isLoading ? (
          <Loader size={60} color="#09f" />
        ) : (
          <ul className={css.list}>
            {cars.map((car) => (
              <li key={car.id}>
                <CarCard car={car} />
              </li>
            ))}
          </ul>
        )}
      </div>
      <LoadMore />
    </section>
  );
}
