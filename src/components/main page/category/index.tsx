'use client';
import Image from 'next/image';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import './style.scss';

export const SelectCategory = () => {
  const categories = [
    {
      name: 'Все апартаменты',
      src: '/assets/categories images/AllApartments.jpg',
      alt: 'Категория - Все апартаменты',
      link: '/Category/All-apartments',
    },
    {
      name: 'С балконом',
      src: '/assets/categories images/withBalcony.jpg',
      alt: 'Категория - с балконом',
      link: '/Category/With-balcony',
    },
    {
      name: 'Без балкона',
      src: '/assets/categories images/withoutBalcony.jpg',
      alt: 'Категория - без балкона',
      link: '/Category/Without-balcony',
    },
    {
      name: 'Студии',
      src: '/assets/categories images/studio.jpg',
      alt: 'Категория - студии',
      link: '/Category/Studio',
    },
    {
      name: 'Однокомнатные',
      src: '/assets/categories images/oneRoom.jpg',
      alt: 'Категория - однокомнатные',
      link: '/Category/One-room',
    },
    {
      name: 'Двухкомнатные',
      src: '/assets/categories images/twoRooms.jpg',
      alt: 'Категория - двухкомнатные',
      link: '/Category/Two-room',
    },
    {
      name: 'Трехкомнатные',
      src: '/assets/categories images/threeRooms.jpg',
      alt: 'Категория - трехкомнатные',
      link: '/Category/Three-room',
    },
    {
      name: 'Вид на море',
      src: '/assets/categories images/sea.jpg',
      alt: 'Категория - вид на море',
      link: '/Category/Sea-view',
    },
    {
      name: 'Вид на город',
      src: '/assets/categories images/city.jpg',
      alt: 'Категория - вид на город',
      link: '/Category/City-view',
    },
    {
      name: '3 cпальных места',
      src: '/assets/categories images/3Beds.jpg',
      alt: 'Категория - 3 cпальных места',
      link: '/Category/3-sleeping-places',
    },
    {
      name: '4 cпальных места',
      src: '/assets/categories images/4Beds.jpg',
      alt: 'Категория - 4 cпальных места',
      link: '/Category/4-sleeping-places',
    },
    {
      name: '5 cпальных мест',
      src: '/assets/categories images/5Beds.jpg',
      alt: 'Категория - 5 cпальных мест',
      link: '/Category/5-sleeping-places',
    },
    {
      name: '6 cпальных мест',
      src: '/assets/categories images/6Beds.jpg',
      alt: 'Категория - 6 cпальных мест',
      link: '/Category/6-sleeping-places',
    },
    {
      name: 'С кофемашиной',
      src: '/assets/categories images/coffeeMachine.jpg',
      alt: 'Категория - с кофемашиной',
      link: '/Category/With-coffee-machine',
    },
    {
      name: 'С духовкой',
      src: '/assets/categories images/oven.jpg',
      alt: 'Категория - с духовкой',
      link: '/Category/With-oven',
    },
    {
      name: 'С посудомоечной машиной',
      src: '/assets/categories images/dishwasher.jpg',
      alt: 'Категория - с посудомоечной машиной',
      link: '/Category/With-dishwasher',
    },
    {
      name: 'С духовкой и посудомоечной машиной',
      src: '/assets/categories images/ovenAndDishwasher.jpg',
      alt: 'Категория - с духовкой и посудомоечной машиной',
      link: '/Category/With-oven-and-dishwasher',
    },
  ];

  return (
    <div className="main-page-container__categories">
      <h2>Категории</h2>

      {categories.map((category) => (
        <Link href={category.link} key={category.name}>
          <span>{category.name}</span>
          <div className="main-page-container__categories-img">
            <Image
              fill
              quality={10}
              sizes="calc(120px + 160 * (100vw / 1920))"
              src={category.src}
              alt={category.alt}
              style={{ borderRadius: '1.5vh' }}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};
export default SelectCategory;
