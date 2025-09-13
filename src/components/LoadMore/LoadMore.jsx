import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../redux/cars/operations";
import { nextPage } from "../../redux/cars/slice";
import { useEffect } from "react";
import css from "./LoadMore.module.css";
import { selectIsLoadingMore } from "../../redux/cars/selectors";
import Loader from "../../components/Loader/Loader";

export default function LoadMore() {
  const dispatch = useDispatch();
  const { page, cars, total, filters } = useSelector((state) => state.cars);
  const isLoadingMore = useSelector(selectIsLoadingMore);

  const handleLoadMore = () => {
    const newPage = page + 1;
    dispatch(nextPage());
    dispatch(getCars({ page: newPage, limit: 12, ...filters }));
  };

  return (
    <>
      {cars.length < total && (
        <div className={css.wrapper}>
          {isLoadingMore ? (
            <Loader size={40} color="#09f" />
          ) : (
            <button
              onClick={handleLoadMore}
              className={css.btn}
              disabled={isLoadingMore}
            >
              Load more
            </button>
          )}
        </div>
      )}
    </>
  );
}
