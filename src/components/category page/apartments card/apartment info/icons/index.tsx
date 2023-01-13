import {
  Conditioner,
  CoffeeMachine,
  Dishwasher,
  Iron,
  Refrigerator,
  Microwave,
  Tv,
  Stove,
  Wifi,
  WashingMachine,
  Hairdryer,
  Teddy,
  Balcony,
  Parking,
  Elevator,
  Kettle,
  Sea,
  City,
  Towels,
} from '../../../../../svg';
import { Apartment } from '../../../../types/type';
import './style.scss';

interface MyProps {
  apartment: Apartment;
}

export const Icons = ({ apartment }: MyProps) => {
  return (
    <div className="category-page-container__apartments-card__info__icons">
      {apartment.balcony ? (
        <div title="Балкон">
          <Balcony />
        </div>
      ) : null}

      {apartment.view === 'Море' ? (
        <div title="Вид на море">
          <Sea />
        </div>
      ) : (
        <div title="Вид на город">
          <City />
        </div>
      )}

      {apartment.oven ? (
        <div title="Духовка">
          <Stove />
        </div>
      ) : null}

      {apartment.dishwasher ? (
        <div title="Посудомоечная машина">
          <Dishwasher />
        </div>
      ) : null}

      {apartment.coffeeMachine ? (
        <div title="Кофемашина">
          <CoffeeMachine />
        </div>
      ) : null}

      <div title="Стиральная машина">
        <WashingMachine />
      </div>

      <div title="Холодильник">
        <Refrigerator />
      </div>

      <div title="Микроволновка">
        <Microwave />
      </div>

      <div title="Чайник">
        <Kettle />
      </div>

      <div title="Кондиционер">
        <Conditioner />
      </div>

      <div title="Телевизор">
        <Tv />
      </div>

      <div title="Полотенца">
        <Towels />
      </div>

      <div title="Утюг">
        <Iron />
      </div>

      <div title="Фен">
        <Hairdryer />
      </div>

      <div title="Wi-Fi">
        <Wifi />
      </div>

      <div title="Можно с детьми">
        <Teddy />
      </div>

      <div title="Парковка">
        <Parking />
      </div>

      <div title="Лифт">
        <Elevator />
      </div>
    </div>
  );
};
