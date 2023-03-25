import "swiper/css";
import "swiper/css/navigation";

import { A11y, Navigation } from "swiper";
import { Snowflake, Sun } from "../../../../../svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { MyApartments } from "@/types/type";
import styles from "./style.module.scss";

interface MyProps {
  apartments: MyApartments[];
  apartsInSlider: number;
}

export const SimilarSlider = ({ apartments, apartsInSlider }: MyProps) => {
  const [reset, setReset] = useState<NodeJS.Timeout>();

  const [priceTitles, setPriceTitles] = useState({
    summer: false,
    winter: false,
    apartment: 10,
  });

  const showPriceTitle = (iconIndex: number, apartmentIndex: number) => {
    clearTimeout(reset);

    if (iconIndex === 0) {
      setPriceTitles({
        summer: true,
        winter: false,
        apartment: apartmentIndex,
      });
    } else {
      setPriceTitles({
        summer: false,
        winter: true,
        apartment: apartmentIndex,
      });
    }

    const id = setTimeout(() => {
      if (iconIndex === 0) {
        setPriceTitles({
          summer: false,
          winter: false,
          apartment: apartmentIndex,
        });
      } else {
        setPriceTitles({
          summer: false,
          winter: false,
          apartment: apartmentIndex,
        });
      }
    }, 2000);

    setReset(id);
  };

  return (
    <Swiper
      slidesPerView={apartsInSlider}
      spaceBetween={30}
      navigation
      modules={[Navigation, A11y]}
      className={styles.similar__slider}
    >
      {apartments?.map((apartment, index) => (
        <SwiperSlide key={apartment.apartmentName}>
          <Image
            src={apartment.images[0].image}
            fill
            sizes='790px'
            priority={index < 4 ? true : false}
            quality={100}
            alt={`test`}
            className={styles.similar__slider_image}
            style={{ objectFit: "cover" }}
          />

          <div className={styles.similar__info}>
            <div className={styles.similar__info_price} onClick={() => showPriceTitle(0, index)}>
              <div>
                <Sun />
              </div>
              <p>{apartment.summerPrice} ₽</p>
              <span
                className={`${
                  priceTitles.apartment === index && priceTitles.summer ? "visible" : "hidden"
                }`}
              >
                Летний сезон (с 1 июня по 1 октября)
              </span>
            </div>
            <div className={styles.similar__info_price} onClick={() => showPriceTitle(1, index)}>
              <div>
                <Snowflake />
              </div>
              <p> {apartment.winterPrice} ₽</p>
              <span
                className={`${
                  priceTitles.apartment === index && priceTitles.winter ? "visible" : "hidden"
                }`}
              >
                Зимний сезон (с 1 октября по 1 июня)
              </span>
            </div>

            <div className={styles.similar__aside}>
              <p className={styles.similar__aside_apartment}>
                Апартамент {apartment.apartmentName}
              </p>
              <span className={styles.similar__aside_description}>
                Размер апартамента: {apartment?.about.squareMeters} m², Количество комнат: &nbsp;
                {apartment?.about.rooms}, Количество спальных мест:{" "}
                {apartment?.about.sleepingPlaces},{" " + apartment?.about.view}, Этаж{" "}
                {apartment?.about.floor}, {apartment?.about.balcony}!
              </span>

              <br />

              <Link
                href={`Aparment-${apartment.apartmentName}`}
                className={styles.similar__aside_link}
              >
                Подробнее ➜
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
