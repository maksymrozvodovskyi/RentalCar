import css from "./BookingForm.module.css";
import DateInput from "./DateInput/DateInput";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BookingForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your car booking has been successfully sent!");
    e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
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
