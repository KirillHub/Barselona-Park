import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export const MainPicture = () => {
  return (
    <div className="main-page">
      <div className="main-page-container">
        <img
          className="main-page-container__picture"
          src="./Апартамент-1104.png"
          alt="Апартамент-1104"
        />

        <div className="main-page-container__barselona-park">
          Barselona Park <br />
          <a className="main-page-container__barselona-park__button" href="https://clck.ru/33DmGb">
            Расположение
          </a>
        </div>

        <div className="main-page-container__categories">
          <Link to="">
            <span>Все апартаменты</span>
            <img
              className="main-page-container__categories-img"
              src="./categories images/Все апартаменты.jpg"
              alt="Апартамент-1104"
            />
          </Link>

          <Link to="">
            <span>С балконом</span>
            <img
              className="main-page-container__categories-img"
              src="./categories images/C балконом.png"
              alt="Апартамент-1104"
            />
          </Link>

          <Link to="">
            <span>Без балкона</span>
            <img
              className="main-page-container__categories-img"
              src="./categories images/Без балкона.JPG"
              alt="Апартамент-1104"
            />
          </Link>

          <Link to="">
            <span>Студии</span>
            <img
              className="main-page-container__categories-img"
              src="./categories images/Студия.jpg"
              alt="Апартамент-1104"
            />
          </Link>

          <Link to="">
            <span>Однокомнатные</span>
            <img
              className="main-page-container__categories-img"
              src="./categories images/однокомнатная.jpg"
              alt="Апартамент-1104"
            />
          </Link>

          <Link to="">
            <span>Двухкомнатные</span>
            <img
              className="main-page-container__categories-img"
              src="./categories images/двухкомнатный.JPG"
              alt="Апартамент-1104"
            />
          </Link>

          <Link to="">
            <span>Трехкомнатные</span>
            <img
              className="main-page-container__categories-img"
              src="./categories images/трехкомнатный.jpg"
              alt="Апартамент-1104"
            />
          </Link>

          <Link to="">
            <span>Вид на море</span>
            <img
              className="main-page-container__categories-img"
              src="./categories images/Море.jpg"
              alt="Апартамент-1104"
            />
          </Link>

          <Link to="">
            <span>Вид на город</span>
            <img
              className="main-page-container__categories-img"
              src="./categories images/город.jpg"
              alt="Апартамент-1104"
            />
          </Link>

          <Link to="">
            <span>3 cпальных места</span>
            <img
              className="main-page-container__categories-img"
              src="./categories images/3 спальных.jpg"
              alt="Апартамент-1104"
            />
          </Link>

          <Link to="">
            <span>4 cпальных места</span>
            <img
              className="main-page-container__categories-img"
              src="./categories images/4 спальных.jpg"
              alt="Апартамент-1104"
            />
          </Link>

          <Link to="">
            <span>5 cпальных мест</span>
            <img
              className="main-page-container__categories-img"
              src="./categories images/5 спальных.jpg"
              alt="Апартамент-1104"
            />
          </Link>

          <Link to="">
            <span>6 cпальных мест</span>
            <img
              className="main-page-container__categories-img"
              src="./categories images/6 спальных.jpg"
              alt="Апартамент-1104"
            />
          </Link>

          <Link to="">
            <span>С кофемашиной</span>
            <img
              className="main-page-container__categories-img"
              src="./categories images/кофемашина.jpg"
              alt="Апартамент-1104"
            />
          </Link>

          <Link to="">
            <span>С духовкой</span>
            <img
              className="main-page-container__categories-img"
              src="./categories images/духовка.jpg"
              alt="Апартамент-1104"
            />
          </Link>
          <Link to="">
            <span>С посудомоечной машиной</span>
            <img
              className="main-page-container__categories-img"
              src="./categories images/посудомоечная.jpg"
              alt="Апартамент-1104"
            />
          </Link>

          <Link to="">
            <span>С духовкой и посудомоечной машиной</span>
            <img
              className="main-page-container__categories-img"
              src="./categories images/духовка посудомойка.jpg"
              alt="Апартамент-1104"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
