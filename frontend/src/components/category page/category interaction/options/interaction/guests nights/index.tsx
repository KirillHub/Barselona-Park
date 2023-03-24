import useStore from "../../../../../../store/useStore";
import { More } from "../../../../../../svg";
import secondStyles from "../../style.module.scss";
import styles from "../style.module.scss";

export const GuestsNights = () => {
  const updateGuests = useStore(state => state.updateGuests);
  const guests = useStore(state => state.guests);
  const nigths = useStore(state => state.nights);

  return (
    <>
      <div className={styles.box}>
        <p className={styles.box__title}>Люди</p>

        <div className={styles.box__content}>
          <span className={styles.box__span}>{guests}</span>

          <div>
            <div
              className={secondStyles.options__icon + " " + secondStyles.options__icon_wrap}
              onClick={() => updateGuests(true)}
            >
              <More />
            </div>

            <div className={secondStyles.options__icon} onClick={() => updateGuests(false)}>
              <More />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.box}>
        <p className={styles.box__title}>Ночей</p>
        <div className={styles.box__content}>
          <span className={styles.box__span}>{nigths}</span>
        </div>
      </div>
    </>
  );
};
