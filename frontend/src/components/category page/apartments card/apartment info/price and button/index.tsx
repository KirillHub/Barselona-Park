import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Apartment } from '../../../../helpers/types/type';
import styles from '../style.module.scss';

interface MyProps {
  apartment: Apartment;
}

export const Price = ({ apartment }: MyProps) => {
  const [titles, setTitles] = useState([false, false]);

  const router = useRouter();

  const handleClick = (id: string) => router.push(`/Apartment-${id}`);

  const showTitle = (iconIndex: number) => {
    setTitles(titles.map((title, index) => (index === iconIndex ? true : title)));

    const id = setTimeout(() => {
      setTitles((prev) => prev.map((title, index) => (index === iconIndex ? false : title)));
    }, 1000);
  };

  return (
    <div className={styles.infoPriceButton}>
      <div>
        <div onClick={() => showTitle(0)}>
          <p>{apartment.summerPrice} -</p> &nbsp;
          <span className={`${titles[0] ? styles.visible : styles.hidden}`}>
            Летний сезон (с 1 июня по 1 октября)
          </span>
        </div>
        <div onClick={() => showTitle(1)}>
          <p>{apartment.winterPrice} ₽</p>
          <span className={`${titles[1] ? styles.visible : styles.hidden}`}>
            Зимний сезон (с 1 октября по 1 июня)
          </span>
        </div>
      </div>

      <div className={styles.infoPriceButtonButn}>
        <button className="main-buttons-style" onClick={() => handleClick(apartment.apartmentName)}>
          Перейти к апартаменту
        </button>
      </div>
    </div>
  );
};
