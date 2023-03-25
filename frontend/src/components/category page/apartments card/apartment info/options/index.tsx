import { Bed, Blueprint, Rooms } from "../../../../../svg";

import { MyApartments } from "../../../../../types/type";
import styles from "../style.module.scss";

interface MyProps {
  apartment: MyApartments;
}

export const Options = ({ apartment }: MyProps) => {
  return (
    <div className={styles.options}>
      <div className={styles.options__description}>
        <div>
          <Rooms />
        </div>
        <p> Комнат - {apartment.about.rooms}</p>
      </div>

      <div className={styles.options__description}>
        <div>
          <Blueprint />
        </div>
        <p>{apartment.about.squareMeters} m²</p>
      </div>

      <div className={styles.options__description}>
        <div>
          <Bed />
        </div>
        <p>Мест - {apartment.about.sleepingPlaces}</p>
      </div>
    </div>
  );
};
