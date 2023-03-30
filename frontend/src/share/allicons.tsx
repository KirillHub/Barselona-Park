import { Balcony, City, CoffeeMachine, Dishwasher, Sea, Stove, Windows } from "../svg";

import { serviceIcons } from "./serviceIcons";

export const AllIcons = () => {
  const allServiceIcons = serviceIcons();

  const optionalIcons = [
    { title: "С балконом", jsx: <Balcony /> },
    { title: "Без балкона", jsx: <Windows /> },
    { title: "Вид на город", jsx: <City /> },
    { title: "Вид на море", jsx: <Sea /> },
    { title: "Кофемашина", jsx: <CoffeeMachine /> },
    { title: "Посудомойка", jsx: <Dishwasher /> },
    { title: "Духовка", jsx: <Stove /> },
  ];

  const icons = optionalIcons.concat(allServiceIcons);

  return icons;
}
