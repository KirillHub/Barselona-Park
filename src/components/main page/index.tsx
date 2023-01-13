import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { SelectCategory } from './category';
import {
  Telegram,
  Whatsapp,
} from '../../svg';
import './style.scss';

interface MyParams {
  id: string;
}

export const MainPicture = () => {
  const { id } = useParams<keyof MyParams>() as MyParams;

  return (
    <div className="main-page">
      <Helmet>
        <title>Barselona Park</title>
        <meta name="description" content="Barselona Park" />
      </Helmet>

      <div className="main-page-container">
        <img
          className="main-page-container__picture"
          src="./Апартамент-1104.png"
          alt="Апартамент-1104"
        />

        <div className="main-page-container__barselona-park">
          <h1>Barselona Park </h1>
          <a className="main-page-container__barselona-park__button" href="https://clck.ru/33DmGb">
            Расположение
          </a>
        </div>

        <SelectCategory />

        <div className="main-page-container__location">
          <div className="main-page-container__location__title">
            <h2>Расположение</h2>
          </div>

          <div className="main-page-container__location__info">
            <iframe
              className="main-page-container__location__info-iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.489148716731!2d39.727650315495104!3d43.575526779124026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f5c9822f0d5bc5%3A0xfef537399b8ab504!2z0JDQv9Cw0YDRgtCw0LzQtdC90YLRiyAi0JHQsNGA0YHQtdC70L7QvdCwINCf0LDRgNC6Ig!5e0!3m2!1sru!2sru!4v1673346772227!5m2!1sru!2sru"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>

            <div className="main-page-container__location__info-about">
              <h3>Barselona park</h3>
              <p>Наша цель сделать ваш отдых максимально лёгким и комфортным</p>
              <h3>Апартаменты у моря</h3>
              <p>
                Удобное расположение 5 минут до моря, 5 мин до Зимнего театра, рядом находятся множество
                ресторанов и кафе, в шаговой доступности остановоки общественного транспорта
              </p>
            </div>
          </div>
        </div>

        <div className="main-page-container__contacts">
          <div className="main-page-container__contacts__title">
            <h2>Контакты</h2>
          </div>

          <div className="main-page-container__contacts__info">
            <div>
              <h3>Наш адрес</h3>
              <p>Курортный пр., 59, Сочи, Краснодарский край, 354000</p>

              <h3>Часы работы</h3>
              <p>Ежедневно с 9:00 до 22:00</p>

              <h3>Контактная информация</h3>
              <span>
                <a href="tel:+79998887766">+7 988 130-62-17</a>
                <a
                  className="main-page-container__contacts__info-icon"
                  href="https://wa.me/+79881306217">
                  <Whatsapp />
                </a>
                <a className="main-page-container__contacts__info-icon" href="https://t.me/+79881306217">
                  <Telegram />
                </a>
              </span>
              <a href="barselona_park@mail.ru">barselona_park@mail.ru</a>
            </div>

            <img className="main-page-container__contacts__info-img" src="./Барселона парк.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
