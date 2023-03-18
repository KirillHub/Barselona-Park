import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "../style.module.scss";

export const BookingButton = () => {
  const pathname = usePathname();
  const apartment = pathname?.split("/")[1];

  return (
    <Link href={`${apartment}/Booking`} className={styles.booking__button}>
      Забронировать
    </Link>
  );
};
