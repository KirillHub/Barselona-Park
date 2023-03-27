import {
  Conditioner,
  Elevator,
  Hairdryer,
  Iron,
  Kettle,
  Microwave,
  Parking,
  Refrigerator,
  Teddy,
  Towels,
  Tv,
  WashingMachine,
  Wifi,
} from "../svg";

console.log('test № 1000');

export const serviceIcons = () => [
  { title: "Стиральная машина", jsx: <WashingMachine /> },
  { title: "Холодильник", jsx: <Refrigerator /> },
  { title: "Микроволновка", jsx: <Microwave /> },
  { title: "Чайник", jsx: <Kettle /> },
  { title: "Кондиционер", jsx: <Conditioner /> },
  { title: "Телевизор", jsx: <Tv /> },
  { title: "Полотенца", jsx: <Towels /> },
  { title: "Утюг", jsx: <Iron /> },
  { title: "Фен", jsx: <Hairdryer /> },
  { title: "Wi-Fi", jsx: <Wifi /> },
  { title: "Можно с детьми", jsx: <Teddy /> },
  { title: "Парковка", jsx: <Parking /> },
  { title: "Лифт", jsx: <Elevator /> },
];

