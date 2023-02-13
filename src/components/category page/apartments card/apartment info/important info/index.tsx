import { Apartment } from '../../../../types/type';
import { Rooms, Blueprint, Bed } from '../../../../../svg';
import './style.scss';

interface MyProps {
  apartment: Apartment;
}

export const ImportantInfo = ({ apartment }: MyProps) => {
  return (
    <div className="category-page-container__apartments-card__info__important-info">
      <div>
        <Rooms />
        <p> Комнат - {apartment.rooms}</p>
      </div>
      <div>
        <Blueprint /> <p>кв. м - {apartment.squareMeters}</p>
      </div>
      <div>
        <Bed /> <p>Мест - {apartment.sleepingPlaces}</p>
      </div>
    </div>
  );
};
