import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "./DateInput.module.css";

export default function DateInput({ onChange }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date) => {
    setSelectedDate(date);
    if (onChange) {
      onChange(date);
    }
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleChange}
      placeholderText="Booking date"
      className={css.dateInput}
      dateFormat="dd/MM/yyyy"
      required
      portalId="root-portal"
    />
  );
}
