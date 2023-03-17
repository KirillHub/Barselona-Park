import { Rooms, Blueprint, Bed } from "../../../../../svg";
import { MyApartments } from "../../../../helpers/types/type";
import styles from "../style.module.scss";

interface MyProps {
  apartment: MyApartments;
}

export const Options = ({ apartment }: MyProps) => {
  return (
    <div className={styles.infoOptions}>
      <div className={styles.infoDescription}>
        <Rooms />
        <p> Комнат - {apartment.about.rooms}</p>
      </div>

      <div className={styles.infoDescription}>
        <Blueprint />
        <p>{apartment.about.squareMeters} m²</p>
      </div>

      <div className={styles.infoDescription}>
        <Bed />
        <p>Мест - {apartment.about.sleepingPlaces}</p>
      </div>
    </div>
  );
};
