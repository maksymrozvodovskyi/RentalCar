import { useState } from "react";
import css from "./MileageInput.module.css";
import formatMileageInput from "../../utils/formatMileageInput";

export default function MileageInput() {
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");

  const handleFromChange = (e) => {
    const num = e.target.value.replace(/\D/g, "");
    setFrom(num);
  };

  const handleToChange = (e) => {
    const num = e.target.value.replace(/\D/g, "");
    setTo(num);
  };

  return (
    <div className={css.wrapper}>
      <label className={css.label}>Сar mileage / km</label>
      <div>
        <input
          type="type"
          placeholder="From"
          value={from ? `From ${formatMileageInput(from)}` : "From"}
          onChange={handleFromChange}
          className={css.inputFirst}
        ></input>
        <input
          type="type"
          placeholder="To"
          value={to ? `To ${formatMileageInput(to)}` : "To"}
          onChange={handleToChange}
          className={css.inputSecond}
        ></input>
      </div>
    </div>
  );
}
