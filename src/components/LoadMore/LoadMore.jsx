import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../redux/cars/operations";
import { nextPage } from "../../redux/cars/slice";
import { useEffect } from "react";
import { selectAllCars } from "../../redux/cars/selectors";
import css from "./LoadMore.module.css";

export default function LoadMore() {
  const dispatch = useDispatch();
  const { page, cars, total, filters, isLoading } = useSelector(
    (state) => state.cars
  );

  useEffect(() => {
    dispatch(getCars({ page, limit: 12, ...filters }));
  }, [dispatch, page, filters]);

  const handleLoadMore = () => {
    dispatch(nextPage());
  };
  return (
    <>
      {cars.length < total && (
        <button onClick={handleLoadMore} className={css.btn}>
          Load More
        </button>
      )}
    </>
  );
}
