import useStore from "../../../../../store/useStore";
import { More } from "../../../../../svg";
import styles from "../style.module.scss";

export const GuestsNights = () => {
  const updateGuests = useStore((state) => state.updateGuests);
  const guests = useStore((state) => state.guests);
  const nigths = useStore((state) => state.nights);

  return (
    <>
      <div className={styles.box}>
        <p className={styles.boxTitle}>Люди</p>

        <div className={styles.boxDate}>
          <span className={styles.boxDateNumber}>{guests}</span>

          <div>
            <div
              className={styles.optionsIcon + " " + styles.IconWrap}
              onClick={() => updateGuests(true)}
            >
              <More />
            </div>

            <div
              className={styles.optionsIcon}
              onClick={() => updateGuests(false)}
            >
              <More />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.box}>
        <p className={styles.boxTitle}>Ночей</p>
        <div className={styles.boxDate}>
          <span className={styles.boxNights}>{nigths}</span>
        </div>
      </div>
    </>
  );
};
