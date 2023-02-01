'use client'
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import './style.scss';


export const SelectCategory = () => {


  return (
    <div className="main-page-container__categories">
      <h2>Категории</h2>

      <Link href="/Category/All-apartments">
        <span>Все апартаменты</span>
        <img
          className="main-page-container__categories-img"
          src="/assets/categories images/AllApartments.jpg"
          alt="Апартамент-1104"
        />
      </Link>

      <Link href="/Category/With-balcony">
        <span>С балконом</span>
        <img
          className="main-page-container__categories-img"
          src="/assets/categories images/withBalcony.jpg"
          alt="Апартамент-1104"
        />
      </Link>

      <Link href="/Category/Without-balcony">
        <span>Без балкона</span>
        <img
          className="main-page-container__categories-img"
          src="/assets/categories images/withoutBalcony.jpg"
          alt="Апартамент-1104"
        />
      </Link>

      <Link href="/Category/Studio">
        <span>Студии</span>
        <img
          className="main-page-container__categories-img"
          src="/assets/categories images/studio.jpg"
          alt="Апартамент-1104"
        />
      </Link>

      <Link href="/Category/One-room">
        <span>Однокомнатные</span>
        <img
          className="main-page-container__categories-img"
          src="/assets/categories images/oneRoom.jpg"
          alt="Апартамент-1104"
        />
      </Link>

      <Link href="/Category/Two-room">
        <span>Двухкомнатные</span>
        <img
          className="main-page-container__categories-img"
          src="/assets/categories images/twoRooms.jpg"
          alt="Апартамент-1104"
        />
      </Link>

      <Link href="/Category/Three-room">
        <span>Трехкомнатные</span>
        <img
          className="main-page-container__categories-img"
          src="/assets/categories images/threeRooms.jpg"
          alt="Апартамент-1104"
        />
      </Link>

      <Link href="/Category/Sea-view">
        <span>Вид на море</span>
        <img
          className="main-page-container__categories-img"
          src="/assets/categories images/sea.jpg"
          alt="Апартамент-1104"
        />
      </Link>

      <Link href="/Category/City-view">
        <span>Вид на город</span>
        <img
          className="main-page-container__categories-img"
          src="/assets/categories images/city.jpg"
          alt="Апартамент-1104"
        />
      </Link>

      <Link href="/Category/3-sleeping-places">
        <span>3 cпальных места</span>
        <img
          className="main-page-container__categories-img"
          src="/assets/categories images/3Beds.jpg"
          alt="Апартамент-1104"
        />
      </Link>

      <Link href="/Category/4-sleeping-places">
        <span>4 cпальных места</span>
        <img
          className="main-page-container__categories-img"
          src="/assets/categories images/4Beds.jpg"
          alt="Апартамент-1104"
        />
      </Link>

      <Link href="/Category/5-sleeping-places">
        <span>5 cпальных мест</span>
        <img
          className="main-page-container__categories-img"
          src="/assets/categories images/5Beds.jpg"
          alt="Апартамент-1104"
        />
      </Link>

      <Link href="/Category/6-sleeping-places">
        <span>6 cпальных мест</span>
        <img
          className="main-page-container__categories-img"
          src="/assets/categories images/6Beds.jpg"
          alt="Апартамент-1104"
        />
      </Link>

      <Link href="/Category/With-coffee-machine">
        <span>С кофемашиной</span>
        <img
          className="main-page-container__categories-img"
          src="/assets/categories images/coffeeMachine.jpg"
          alt="Апартамент-1104"
        />
      </Link>

      <Link href="/Category/With-oven">
        <span>С духовкой</span>
        <img
          className="main-page-container__categories-img"
          src="/assets/categories images/oven.jpg"
          alt="Апартамент-1104"
        />
      </Link>
      <Link href="/Category/With-dishwasher">
        <span>С посудомоечной машиной</span>
        <img
          className="main-page-container__categories-img"
          src="/assets/categories images/dishwasher.jpg"
          alt="Апартамент-1104"
        />
      </Link>

      <Link href="/Category/With-oven-and-dishwasher">
        <span>С духовкой и посудомоечной машиной</span>
        <img
          className="main-page-container__categories-img"
          src="/assets/categories images/ovenAndDishwasher.jpg"
          alt="Апартамент-1104"
        />
      </Link>
    </div>
  );
};
export default SelectCategory;
