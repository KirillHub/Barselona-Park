import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Apartment } from '../../../../types/type';
import './style.scss';

interface MyProps {
  apartment: Apartment;
}

export const Price = ({ apartment }: MyProps) => {
  const [titles, setTitles] = useState([false, false]);

  const router = useRouter();

  const handleClick = (id: string) => router.push(`/Apartment/${id}`);

  const showTitle = (iconIndex: number) => {
    setTitles(titles.map((title, index) => (index === iconIndex ? true : title)));

    const id = setTimeout(() => {
      setTitles((prev) => prev.map((title, index) => (index === iconIndex ? false : title)));
    }, 1000);
  };

  return (
    <div className="category-page-container__apartments-card__info__price">
      <div>
        <div onClick={() => showTitle(0)}>
          <p>{apartment.summerPrice} ₽ -</p> &nbsp;
          <span className={`${titles[0] ? 'visible-title' : 'hidden-title'}`}>
            Летний сезон (с 1 июня по 1 октября)
          </span>
        </div>
        <div onClick={() => showTitle(1)}>
          <p>{apartment.winterPrice} ₽</p>
          <span className={`${titles[1] ? 'visible-title' : 'hidden-title'}`}>
            Зимний сезон (с 1 октября по 1 июня)
          </span>
        </div>
      </div>

      <button className="main-buttons-style" onClick={() => handleClick(apartment.name)}>
        Перейти к апартаменту
      </button>
    </div>
  );
};
