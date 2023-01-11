import React from 'react'

export const Category = () => {
  return (
    <div className="main-page-container__categories">
      <div className="main-page-container__categories__title">
        <h2>Категории</h2>
      </div>
      <br />

      <Link to="/Category/All-apartments">
        <span>Все апартаменты</span>
        <img
          className="main-page-container__categories-img"
          src="./categories images/Все апартаменты.jpg"
          alt="Апартамент-1104"
        />
      </Link>

      <Link to="/Category/With-balcony">
        <span>С балконом</span>
        <img
          className="main-page-container__categories-img"
          src="./categories images/C балконом.png"
          alt="Апартамент-1104"
        />
      </Link>

      <Link to="/Category/Without-balcony">
        <span>Без балкона</span>
        <img
          className="main-page-container__categories-img"
          src="./categories images/Без балкона.JPG"
          alt="Апартамент-1104"
        />
      </Link>

      <Link to="/Category/Studio">
        <span>Студии</span>
        <img
          className="main-page-container__categories-img"
          src="./categories images/Студия.jpg"
          alt="Апартамент-1104"
        />
      </Link>

      <Link to="/Category/One-room">
        <span>Однокомнатные</span>
        <img
          className="main-page-container__categories-img"
          src="./categories images/однокомнатная.jpg"
          alt="Апартамент-1104"
        />
      </Link>

      <Link to="/Category/Two-room">
        <span>Двухкомнатные</span>
        <img
          className="main-page-container__categories-img"
          src="./categories images/двухкомнатный.JPG"
          alt="Апартамент-1104"
        />
      </Link>

      <Link to="/Category/Three-room">
        <span>Трехкомнатные</span>
        <img
          className="main-page-container__categories-img"
          src="./categories images/трехкомнатный.jpg"
          alt="Апартамент-1104"
        />
      </Link>

      <Link to="/Category/Sea-view">
        <span>Вид на море</span>
        <img
          className="main-page-container__categories-img"
          src="./categories images/Море.jpg"
          alt="Апартамент-1104"
        />
      </Link>

      <Link to="/Category/City-view">
        <span>Вид на город</span>
        <img
          className="main-page-container__categories-img"
          src="./categories images/город.jpg"
          alt="Апартамент-1104"
        />
      </Link>

      <Link to="/Category/3-sleeping-places">
        <span>3 cпальных места</span>
        <img
          className="main-page-container__categories-img"
          src="./categories images/3 спальных.jpg"
          alt="Апартамент-1104"
        />
      </Link>

      <Link to="/Category/4-sleeping-places">
        <span>4 cпальных места</span>
        <img
          className="main-page-container__categories-img"
          src="./categories images/4 спальных.jpg"
          alt="Апартамент-1104"
        />
      </Link>

      <Link to="/Category/5-sleeping-places">
        <span>5 cпальных мест</span>
        <img
          className="main-page-container__categories-img"
          src="./categories images/5 спальных.jpg"
          alt="Апартамент-1104"
        />
      </Link>

      <Link to="/Category/6-sleeping-places">
        <span>6 cпальных мест</span>
        <img
          className="main-page-container__categories-img"
          src="./categories images/6 спальных.jpg"
          alt="Апартамент-1104"
        />
      </Link>

      <Link to="/Category/With-coffee-machine">
        <span>С кофемашиной</span>
        <img
          className="main-page-container__categories-img"
          src="./categories images/кофемашина.jpg"
          alt="Апартамент-1104"
        />
      </Link>

      <Link to="/Category/With-oven">
        <span>С духовкой</span>
        <img
          className="main-page-container__categories-img"
          src="./categories images/духовка.jpg"
          alt="Апартамент-1104"
        />
      </Link>
      <Link to="/Category/With-dishwasher">
        <span>С посудомоечной машиной</span>
        <img
          className="main-page-container__categories-img"
          src="./categories images/посудомоечная.jpg"
          alt="Апартамент-1104"
        />
      </Link>

      <Link to="/Category/With-oven-and-dishwasher">
        <span>С духовкой и посудомоечной машиной</span>
        <img
          className="main-page-container__categories-img"
          src="./categories images/духовка посудомойка.jpg"
          alt="Апартамент-1104"
        />
      </Link>
    </div>
  );
}
