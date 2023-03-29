"use client";

import { Telegram, Whatsapp } from "../../svg";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import SelectCategory from "../../share/components/select category/selectCategory";
import { serviceIcons } from "@/share/serviceIcons";
import { useEffect, useState } from "react";
import { BackgroundImageSlider } from "@/share/components/backgroundImageSlider";
import { SearhPanel } from "./search panel";
import styles from "./style.module.scss";
import Location from "./location";
import Service from "../../share/components/service icons";
import ServiceIcons from "../../share/components/service icons";
import BookingPage from "../booking page";
import ApartamentsSlider from "@/share/components/apartaments slider";
import DiscoverLocation from "./discover location";
import { useSpring, config } from "react-spring";
import { useInView } from "react-intersection-observer";
import Reviews from "../reviews page";

export const MainPicture = () => {
  const services = serviceIcons();



  // в дальнейшем можно такого рода конфиги выносить в отдельные файлы
  const bgConfig = {
    fhotoCount: 7,
    fileName: "main page",
    fileExtension: "webp",
    slideSwitchingSpeed: 15000,
  };
  const { fhotoCount, fileName, fileExtension, slideSwitchingSpeed } = bgConfig;

  return (
    <div className={styles.main_page}>
      <div className={styles.main_page__container_main}>
        <div className={styles.main_page__picture}>
          <BackgroundImageSlider
            fhotoCount={fhotoCount}
            fileName={fileName}
            fileExtension={fileExtension}
            slideSwitchingSpeed={slideSwitchingSpeed}
          />
        </div>

        <div className={styles.main_page__search_panel}>
          <SearhPanel />
        </div>
      </div>

      <div className={styles.main_page__select_category}>
        <SelectCategory />
      </div>

      <div className={styles.main_page__service_icons}>
        <ServiceIcons />
      </div>

      <div>
        <ApartamentsSlider />
      </div>

		<Reviews/>

      <div className={styles.main_page__discover_location}>
        <DiscoverLocation fhotoCount={4} fileName={fileName} fileExtension={fileExtension} />
      </div>

      <div className={styles.main_page__location}>
        <Location />
      </div>
    </div>
  );
};

export default MainPicture;

{
  /* <div className='main-page-container-cleaning'>
          <h3>Повышенный комфорт и безопасность</h3>

          <br />
          <span>Всегда заботимся о наших гостях</span>
          <br />
          <span>Постоянная чистота и дружелюбное общение</span>
          <br />
          <span>Cтремимся поддерживать высочайший уровень гостеприимства и доверия</span>
        </div> */
}

{
  /* <div className='main-page-container__blocks'>
          <h2>Расположение</h2>

          <div className='main-page-container__blocks__location__info'>
            <div className='main-page-container__blocks__location__info__block'>
              <iframe
                className='main-page-container__blocks__location__info-iframe'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.489148716731!2d39.727650315495104!3d43.575526779124026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f5c9822f0d5bc5%3A0xfef537399b8ab504!2z0JDQv9Cw0YDRgtCw0LzQtdC90YLRiyAi0JHQsNGA0YHQtdC70L7QvdCwINCf0LDRgNC6Ig!5e0!3m2!1sru!2sru!4v1673346772227!5m2!1sru!2sru'
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>

              <div className='main-page-container__blocks__location__info-about'>
                <h3>Barselona park</h3>
                <p>Наша цель сделать ваш отдых максимально лёгким и комфортным</p>
                <h3>Апартаменты у моря</h3>
                <p>
                  Апартаментный комплекс «Барселона Парк» располагается в историческом центре Сочи
                  неподалеку от Зимнего театра и концертного зала «Фестивальный». Здесь доступны все
                  привилегии курортного города, от прекрасной экологии до инфраструктуры, делающей
                  проживание здесь очень комфортным.
                </p>
              </div>
            </div>
          </div>

          <div className='main-page-container__blocks__contacts'>
            <h2>Контакты</h2>

            <div className='main-page-container__blocks__contacts__info'>
              <div className='main-page-container__blocks__contacts__info-img'>
                <Image
                  sizes='300px'
                  fill
                  quality={100}
                  style={{ objectFit: "cover" }}
                  src='/barselonaPark.jpg'
                  alt='barsa'
                />
              </div>

              <div>
                <h3>Наш адрес</h3>
                <p>Курортный пр., 59, Сочи, Краснодарский край, 354000</p>

                <h3>Часы работы</h3>
                <p>Ежедневно с 9:00 до 22:00</p>

                <h3>Контактная информация</h3>
                <span>
                  <a href='tel:+79998887766'>+7 988 130-62-17</a>
                  <a
                    className='main-page-container__blocks__contacts__info-icon'
                    href='https://wa.me/+79881306217'
                  >
                    <Whatsapp />
                  </a>
                  <a
                    className='main-page-container__blocks__contacts__info-icon'
                    href='https://t.me/+79881306217'
                  >
                    <Telegram />
                  </a>
                </span>
                <a href='barselona_park@mail.ru'>barselona_park@mail.ru</a>
              </div>
            </div>
          </div>
        </div> */
}
