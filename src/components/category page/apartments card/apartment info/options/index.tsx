import { Apartment } from '../../../../types/type';
import { Rooms, Blueprint, Bed } from '../../../../../svg';
import styles from '../style.module.scss';

interface MyProps {
  apartment: Apartment;
}

export const Options = ({ apartment }: MyProps) => {
  return (
    <div className={styles.infoOptions}>
      <div className={styles.infoDescription}>
        <Rooms />
        <p> Комнат - {apartment.rooms}</p>
      </div>

      <div className={styles.infoDescription}>
        <Blueprint />
        <p>кв. м - {apartment.squareMeters}</p>
      </div>

      <div className={styles.infoDescription}>
        <Bed />
        <p>Мест - {apartment.sleepingPlaces}</p>
      </div>
    </div>
  );
};
