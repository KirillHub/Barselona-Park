import {
  Balcony,
  City,
  CoffeeMachine,
  Conditioner,
  Dishwasher,
  Elevator,
  Hairdryer,
  Iron,
  Kettle,
  Microwave,
  Parking,
  Refrigerator,
  Sea,
  Stove,
  Teddy,
  Towels,
  Tv,
  WashingMachine,
  Wifi,
} from "../../svg";

import { MyApartments } from "../types/type";

export const readyIcons = (apartment: MyApartments) => {
  return [
    {
      jsx: apartment?.about.balcony === "С балконом" ? <Balcony /> : "",
      title:
        apartment?.about.balcony === "С балконом"
          ? apartment?.about.balcony
          : "",
    },
    {
      jsx: apartment?.about.view === "Вид на море" ? <Sea /> : <City />,
      title: apartment?.about.view,
    },
    {
      jsx: apartment?.services.stove ? <Stove /> : "",
      title: apartment?.services.stove ? "Духовка" : "",
    },
    {
      jsx: apartment?.services.coffeeMachine ? <CoffeeMachine /> : "",
      title: apartment?.services.coffeeMachine ? "Кофемашина" : "",
    },
    {
      jsx: apartment?.services.dishwasher ? <Dishwasher /> : "",
      title: apartment?.services.dishwasher ? "Посудомойка" : "",
    },
    {
      jsx: <WashingMachine />,
      title: "Стиральная машина",
    },
    {
      jsx: <Teddy />,
      title: "Можно с детьми",
    },
    {
      jsx: <Parking />,
      title: "Парковка платная",
    },
    {
      jsx: <Microwave />,
      title: "СВЧ-печь",
    },
    {
      jsx: <Refrigerator />,
      title: "Холодильник",
    },

    {
      jsx: <Kettle />,
      title: "Чайник",
    },
    {
      jsx: <Conditioner />,
      title: "Кондиционер",
    },
    {
      jsx: <Tv />,
      title: "Телевизор",
    },
    {
      jsx: <Towels />,
      title: "Полотенца",
    },
    {
      jsx: <Iron />,
      title: "Утюг",
    },
    {
      jsx: <Hairdryer />,
      title: "Фен",
    },
    {
      jsx: <Wifi />,
      title: "wi-fi",
    },
    {
      jsx: <Elevator />,
      title: "Лифт",
    },
  ];
};
