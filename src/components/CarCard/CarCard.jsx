import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarById } from "../../redux/cars/operations";
import { selectCurrentCar } from "../../redux/cars/selectors";

export default function CarCard({ id }) {
  const dispatch = useDispatch();
  const car = useSelector(selectCurrentCar);

  useEffect(() => {
    dispatch(getCarById(id));
  }, [dispatch, id]);

  return <></>;
}
