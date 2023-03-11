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
} from '../../../svg';
import { Apartment } from '../types/type';

export const readyIcons = (apartment: Apartment) => {
  return [
    {
      jsx: apartment.about.balcony === 'С балконом' ? <Balcony /> : '',
      title: apartment.about.balcony,
    },
    {
      jsx: apartment.about.view === 'Вид на море' ? <Sea /> : <City />,
      title: apartment.about.view,
    },
    {
      jsx: apartment.services.stove ? <Stove /> : '',
      title: apartment.services.stove ? 'Духовка' : '',
    },
    {
      jsx: apartment.services.dishwasher ? <Dishwasher /> : '',
      title: apartment.services.dishwasher ? 'Посудомоечная машина' : '',
    },
    {
      jsx: apartment.services.coffeeMachine ? <CoffeeMachine /> : '',
      title: apartment.services.coffeeMachine ? 'Кофемашина' : '',
    },
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
      title: 'Парковка платная',
    },
    {
      jsx: <Elevator />,
      title: 'Лифт',
    },
  ];
};
