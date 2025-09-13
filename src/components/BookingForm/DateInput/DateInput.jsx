import css from "./DateInput.module.css";

export default function DateInput() {
  return (
    <>
      <input
        type="date"
        name="date"
        placeholder="Booking date"
        required
        className={css.dateInput}
      />
    </>
  );
}
