import { BookingApartment } from "./booking apartment";
import { BookingInfo } from "./booking info";
import { CustomerInformation } from "./customer information";
import styles from ".//style.module.scss";

export default function BookingPage() {
  return (
    <div className={styles.booking}>
      <CustomerInformation />
      <div className={styles.booking__content}>
        <BookingApartment />
        <BookingInfo />
      </div>
    </div>
  );
}
