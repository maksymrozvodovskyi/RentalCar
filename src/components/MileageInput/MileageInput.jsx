import { useState } from "react";
import css from "./MileageInput.module.css";
import formatMileageInput from "../../utils/formatMileageInput";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../redux/cars/slice";
import { selectMileage } from "../../redux/cars/selectors";

export default function MileageInput() {
  const dispatch = useDispatch();
  const { minMileage, maxMileage } = useSelector(selectMileage);

  const handleFromChange = (e) => {
    const num = e.target.value.replace(/\D/g, "");
    dispatch(setFilters({ minMileage: num || "" }));
  };

  const handleToChange = (e) => {
    const num = e.target.value.replace(/\D/g, "");
    dispatch(setFilters({ maxMileage: num || "" }));
  };

  return (
    <div className={css.wrapper}>
      <label className={css.label}>Сar mileage / km</label>
      <div>
        <input
          type="text"
          placeholder="From"
          value={minMileage ? `From ${formatMileageInput(minMileage)}` : "From"}
          onChange={handleFromChange}
          className={css.inputFirst}
        ></input>
        <input
          type="text"
          placeholder="To"
          value={maxMileage ? `To ${formatMileageInput(maxMileage)}` : "To"}
          onChange={handleToChange}
          className={css.inputSecond}
        ></input>
      </div>
    </div>
  );
}
