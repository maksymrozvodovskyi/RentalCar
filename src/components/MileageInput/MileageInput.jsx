import { useState } from "react";
import css from "./MileageInput.module.css";

export default function MileageInput() {
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  return (
    <div>
      <label>Сar mileage / km</label>
      <div>
        <input
          type="number"
          placeholder="From"
          value={from}
          onChange={(event) => {
            setFrom(event.target.value);
          }}
        ></input>
        <span></span>
        <input
          type="number"
          placeholder="To"
          value={to}
          onChange={(event) => {
            setTo(event.target.value);
          }}
        ></input>
      </div>
    </div>
  );
}
