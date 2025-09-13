import css from "./BookingForm.module.css";
import DateInput from "./DateInput/DateInput";

export default function BookingForm() {
  return (
    <form className={css.form}>
      <h3 className={css.title}>Book your car now</h3>
      <p className={css.description}>
        Stay connected! We are always ready to help you.
      </p>

      <div className={css.inputWrapper}>
        <input
          type="text"
          name="text"
          placeholder="Name*"
          required
          className={css.textInput}
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          required
          className={css.emailInput}
        />
        <DateInput />
        <textarea
          name="comment"
          placeholder="Comment"
          className={css.comment}
        ></textarea>
      </div>
      <button type="submit" className={css.btn}>
        Send
      </button>
    </form>
  );
}
