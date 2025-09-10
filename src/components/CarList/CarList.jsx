import { useDispatch, useSelector } from "react-redux";
import { selectAllCars, selectIsLoading } from "../../redux/cars/selectors";
import { useEffect } from "react";
import { getCars } from "../../redux/cars/operations";
import CarCard from "../CarCard/CarCard";

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
    dispatch(getCars({ page, limit, brand, price, minMil, maxMil }));
  }, [dispatch, page, limit, brand, price, minMil, maxMil]);

  return (
    <div>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <CarCard car={car} />
          </li>
        ))}
      </ul>
    </div>
  );
}
