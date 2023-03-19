import { Rooms, Blueprint, Bed } from "../../../../../svg";
import { MyApartments } from "../../../../helpers/types/type";
import styles from "../style.module.scss";

interface MyProps {
  apartment: MyApartments;
}

export const Options = ({ apartment }: MyProps) => {
  return (
    <div className={styles.options}>
      <div className={styles.options__description}>
        <Rooms />
        <p> Комнат - {apartment.about.rooms}</p>
      </div>

      <div className={styles.options__description}>
        <Blueprint />
        <p>{apartment.about.squareMeters} m²</p>
      </div>

      <div className={styles.options__description}>
        <Bed />
        <p>Мест - {apartment.about.sleepingPlaces}</p>
      </div>
    </div>
  );
};
