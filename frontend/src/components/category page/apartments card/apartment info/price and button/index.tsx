import { Snowflake, Sun } from "@/svg";

import { MyApartments } from "../../../../../types/type";
import styles from "../style.module.scss";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface MyProps {
  apartment: MyApartments;
}

export const Price = ({ apartment }: MyProps) => {
  const [titles, setTitles] = useState([false, false]);
  const [reset, setReset] = useState<NodeJS.Timeout>();

  const router = useRouter();

  const handleClick = (id: number) => router.push(`/Apartment-${id}`);

  const showTitle = (iconIndex: number) => {
    clearTimeout(reset);
    setTitles(titles.map((title, index) => (index === iconIndex ? true : false)));

    const id = setTimeout(() => {
      setTitles([false, false]);
    }, 2000);
    setReset(id);
  };

  return (
    <div className={styles.priceButton}>
      <div className={styles.priceButton__content}>
        <div className={styles.priceButton__price} onClick={() => showTitle(0)}>
					<div>
          <Sun />
					</div>
          <p>
            {apartment.summerPrice} ₽
            <span className={`${titles[0] ? "visible" : "hidden"}`}>
              Летний сезон (с 1 июня по 1 октября)
            </span>
          </p>
        </div>

        <div className={styles.priceButton__price} onClick={() => showTitle(1)}>
					<div>
          <Snowflake />
					</div>
          <p>
            {apartment.winterPrice} ₽
            <span className={`${titles[1] ? "visible" : "hidden"}`}>
              Зимний сезон (с 1 октября по 1 июня)
            </span>
          </p>
        </div>
      </div>

      {/* <div className={styles.priceButton__button}>
        <button
          className="main-buttons-style"
          onClick={() => handleClick(apartment.apartmentName)}
        >
          Подробности
        </button>
      </div> */}
    </div>
  );
};
