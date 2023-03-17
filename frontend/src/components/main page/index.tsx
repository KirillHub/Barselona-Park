"use client";
import Image from "next/image";

import { Telegram, Whatsapp } from "../../svg";
import {
  Conditioner,
  Iron,
  Refrigerator,
  Microwave,
  Tv,
  Wifi,
  WashingMachine,
  Hairdryer,
  Teddy,
  Balcony,
  Parking,
  Elevator,
  Kettle,
  Towels,
} from "../../svg";
import SelectCategory from "../select category/selectCategory";
import "./style.scss";

export const MainPicture = () => {
  const services = [
    { name: "Стиральная машина", svg: <WashingMachine /> },
    { name: "Холодильник", svg: <Refrigerator /> },
    { name: "Микроволновка", svg: <Microwave /> },
    { name: "Чайник", svg: <Kettle /> },
    { name: "Кондиционер", svg: <Conditioner /> },
    { name: "Телевизор", svg: <Tv /> },
    { name: "Полотенца", svg: <Towels /> },
    { name: "Утюг", svg: <Iron /> },
    { name: "Фен", svg: <Hairdryer /> },
    { name: "Wi-Fi", svg: <Wifi /> },
    { name: "Можно с детьми", svg: <Teddy /> },
    { name: "Парковка", svg: <Parking /> },
    { name: "Лифт", svg: <Elevator /> },
    { name: "Стиральная машина", svg: <WashingMachine /> },
  ];

  return (
    <div className="main-page">
      <title>Barselona Park</title>
      <meta
        name="description"
        content="Барселона парк - Апартаменты в центре Сочи, 3 минуты до моря. 8-988-130-62-17"
      />
      <meta
        name="keywords"
        content="Барселона парк, Barselona park, апартаменты, апартаменты Сочи"
      />
      <meta name="Document-state" content="Dynamic" />
      <meta name="Author" content="https://github.com/bi-zi" />
      <meta name="Copyright" content="bi_zi" />

      <div className="main-page-container">
        <div className="main-page-container__picture">
          <Image
            priority
            fill
            quality={75}
            style={{ objectFit: "cover" }}
            src="/assets/main page/1.webp"
            alt="Апартамент-1104"
          />
        </div>

        <div className="main-page-container-service">
          <h3>Услуги</h3>
          <div className="main-page-container-service__icons">
            {services.map((icon, i) => (
              <div className="main-page-container-service__icons-icon" key={i}>
                <div>{icon.svg}</div>
                {icon.name}
              </div>
            ))}
          </div>
        </div>

        <SelectCategory />

        <div className="main-page-container-cleaning">
          <h3>Повышенный комфорт и безопасность</h3>

          <br />
          <span>Всегда заботимся о наших гостях</span>
          <br />
          <span>Постоянная чистота и дружелюбное общение</span>
          <br />
          <span>
            Cтремимся поддерживать высочайший уровень гостеприимства и доверия
          </span>
        </div>

        <div className="main-page-container__blocks">
          <h2>Расположение</h2>

          <div className="main-page-container__blocks__location__info">
            <div className="main-page-container__blocks__location__info__block">
              <iframe
                className="main-page-container__blocks__location__info-iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.489148716731!2d39.727650315495104!3d43.575526779124026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f5c9822f0d5bc5%3A0xfef537399b8ab504!2z0JDQv9Cw0YDRgtCw0LzQtdC90YLRiyAi0JHQsNGA0YHQtdC70L7QvdCwINCf0LDRgNC6Ig!5e0!3m2!1sru!2sru!4v1673346772227!5m2!1sru!2sru"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <div className="main-page-container__blocks__location__info-about">
                <h3>Barselona park</h3>
                <p>
                  Наша цель сделать ваш отдых максимально лёгким и комфортным
                </p>
                <h3>Апартаменты у моря</h3>
                <p>
                  Апартаментный комплекс «Барселона Парк» располагается в
                  историческом центре Сочи неподалеку от Зимнего театра и
                  концертного зала «Фестивальный». Здесь доступны все привилегии
                  курортного города, от прекрасной экологии до инфраструктуры,
                  делающей проживание здесь очень комфортным.
                </p>
              </div>
            </div>
          </div>

          <div className="main-page-container__blocks__contacts">
            <h2>Контакты</h2>

            <div className="main-page-container__blocks__contacts__info">
              <div className="main-page-container__blocks__contacts__info-img">
                <Image
                  sizes="300px"
                  fill
                  quality={100}
                  style={{ objectFit: "cover" }}
                  src="/barselonaPark.jpg"
                  alt="barsa"
                />
              </div>

              <div>
                <h3>Наш адрес</h3>
                <p>Курортный пр., 59, Сочи, Краснодарский край, 354000</p>

                <h3>Часы работы</h3>
                <p>Ежедневно с 9:00 до 22:00</p>

                <h3>Контактная информация</h3>
                <span>
                  <a href="tel:+79998887766">+7 988 130-62-17</a>
                  <a
                    className="main-page-container__blocks__contacts__info-icon"
                    href="https://wa.me/+79881306217"
                  >
                    <Whatsapp />
                  </a>
                  <a
                    className="main-page-container__blocks__contacts__info-icon"
                    href="https://t.me/+79881306217"
                  >
                    <Telegram />
                  </a>
                </span>
                <a href="barselona_park@mail.ru">barselona_park@mail.ru</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainPicture;
