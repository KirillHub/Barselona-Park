import { useState } from 'react';
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
  const icons = [
    {
      jsx: <WashingMachine />,
      title: 'Стиральная машина',
    },
    {
      jsx: <Refrigerator />,
      title: 'Холодильник',
    },
    {
      jsx: <Microwave />,
      title: 'Микроволновка',
    },
    {
      jsx: <Kettle />,
      title: 'Чайник',
    },
    {
      jsx: <Conditioner />,
      title: 'Кондиционер',
    },
    {
      jsx: <Tv />,
      title: 'Телевизор',
    },
    {
      jsx: <Towels />,
      title: 'Полотенца',
    },
    {
      jsx: <Iron />,
      title: 'Утюг',
    },
    {
      jsx: <Hairdryer />,
      title: 'Фен',
    },
    {
      jsx: <Wifi />,
      title: 'wi-fi',
    },
    {
      jsx: <Teddy />,
      title: 'Можно с детьми',
    },
    {
      jsx: <Parking />,
      title: 'Парковка',
    },
    {
      jsx: <Elevator />,
      title: 'Лифт',
    },
  ];

  const [titles, setTitles] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const showTitle = (iconIndex: number) => {
    setTitles(titles.map((title, index) => (index === iconIndex ? true : title)));

    const id = setTimeout(() => {
      setTitles((prev) => prev.map((title, index) => (index === iconIndex ? false : title)));
    }, 1000);
  };

  return (
    <div className="category-page-container__apartments-card__info__icons">
      {apartment.balcony ? (
        <div onClick={() => showTitle(0)}>
          <Balcony />
          <span className={`${titles[0] ? 'visible-title' : 'hidden-title'}`}>Балкон</span>
        </div>
      ) : null}

      {apartment.view ? (
        <div onClick={() => showTitle(1)}>
          <Sea />
          <span className={`${titles[1] ? 'visible-title' : 'hidden-title'}`}>Вид на море</span>
        </div>
      ) : (
        <div onClick={() => showTitle(2)}>
          <City />
          <span className={`${titles[2] ? 'visible-title' : 'hidden-title'}`}>Вид на город</span>
        </div>
      )}

      {apartment.oven ? (
        <div onClick={() => showTitle(3)}>
          <Stove />
          <span className={`${titles[3] ? 'visible-title' : 'hidden-title'}`}>Духовка</span>
        </div>
      ) : null}

      {apartment.dishwasher ? (
        <div onClick={() => showTitle(4)}>
          <Dishwasher />
          <span className={`${titles[4] ? 'visible-title' : 'hidden-title'}`}>Посудомоечная машина</span>
        </div>
      ) : null}

      {apartment.coffeeMachine ? (
        <div onClick={() => showTitle(5)}>
          <CoffeeMachine />
          <span className={`${titles[5] ? 'visible-title' : 'hidden-title'}`}>Кофемашина</span>
        </div>
      ) : null}

      {icons.map((icon, index) => (
        <div onClick={() => showTitle(index + 6)} key={icon.title}>
          {icon.jsx}
          <span className={`${titles[index + 6] ? 'visible-title' : 'hidden-title'}`}>
            {icon.title}
          </span>
        </div>
      ))}
    </div>
  );
};
