import { Snowflake, Sun } from "@/svg";

import { MyApartments } from "../../../../../helpers/types/type";
import styles from "../style.module.scss";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface MyProps {
  apartment: MyApartments;
}

export const Price = ({ apartment }: MyProps) => {
  const [titles, setTitles] = useState([false, false]);

  const router = useRouter();

  const handleClick = (id: number) => router.push(`/Apartment-${id}`);

  const showTitle = (iconIndex: number) => {
    setTitles(
      titles.map((title, index) => (index === iconIndex ? true : title))
    );

    const id = setTimeout(() => {
      setTitles((prev) =>
        prev.map((title, index) => (index === iconIndex ? false : title))
      );
    }, 1000);
  };

  return (
    <div className={styles.priceButton}>
      <div className={styles.priceButton__content}>
        <div className={styles.priceButton__price} onClick={() => showTitle(0)}>
          <Sun />
          <div>
            {apartment.summerPrice} ₽
            <span className={`${titles[0] ? "visible" : "hidden"}`}>
              Летний сезон (с 1 июня по 1 октября)
            </span>
          </div>
        </div>

        <div className={styles.priceButton__price} onClick={() => showTitle(1)}>
          <Snowflake />
          <div>
            {apartment.winterPrice} ₽
            <span className={`${titles[1] ? "visible" : "hidden"}`}>
              Зимний сезон (с 1 октября по 1 июня)
            </span>
          </div>
        </div>
      </div>

      <div className={styles.priceButton__button}>
        <button
          className="main-buttons-style"
          onClick={() => handleClick(apartment.apartmentName)}
        >
          Подробности
        </button>
      </div>
    </div>
  );
};
