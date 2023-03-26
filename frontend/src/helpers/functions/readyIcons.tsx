import {
  Balcony,
  City,
  CoffeeMachine,
  Dishwasher,
  Sea,
  Stove,
  Windows,
} from "../../svg";
import { MyApartments, Service } from "../../types/type";

export const readyIcons = (apartment: MyApartments, services: Service[]) => {
  return [
    {
      jsx: apartment?.about.balcony === "С балконом" ? <Balcony /> : <Windows />,
      title: apartment?.about.balcony === "С балконом" ? apartment?.about.balcony : "Без балкона",
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
    ...services,
  ];
};
