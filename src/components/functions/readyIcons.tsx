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
} from '../../svg';
import { Apartment } from '../types/type';

export const readyIcons = (apartment: Apartment) => {
  return [
    {
      jsx: apartment.balcony ? <Balcony /> : '',
      title: apartment.balcony ? 'Балкон' : '',
    },
    {
      jsx: apartment.view ? <Sea /> : <City />,
      title: apartment.view ? 'Вид на море' : 'Вид на город',
    },
    {
      jsx: apartment.oven ? <Stove /> : '',
      title: apartment.oven ? 'Духовка' : '',
    },
    {
      jsx: apartment.dishwasher ? <Dishwasher /> : '',
      title: apartment.dishwasher ? 'Посудомоечная машина' : '',
    },
    {
      jsx: apartment.coffeeMachine ? <CoffeeMachine /> : '',
      title: apartment.coffeeMachine ? 'Кофемашина' : '',
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
      title: 'Парковка',
    },
    {
      jsx: <Elevator />,
      title: 'Лифт',
    },
  ];
};
