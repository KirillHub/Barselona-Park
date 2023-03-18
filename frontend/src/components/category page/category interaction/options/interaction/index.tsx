import { GuestsNights } from "./guests nights";
import { CheckInCheckOut } from "./search by date";
import styles from "./style.module.scss";

export const Interaction = () => {
  return (
    <div className={styles.interaction}>
      <CheckInCheckOut />
      <GuestsNights />
    </div>
  );
};
