"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { LegacyRef, useEffect, useRef, useState } from "react";
import { A11y, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";

import styles from "./style.module.scss";
import { Snowflake, Sun } from "../../../svg";
import { MyApartments } from "../../helpers/types/type";
import "swiper/css";
import "swiper/css/navigation";

interface MyProps {
  apartmentId: number;
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const useSimilar = (apartmentId: number, option: string) => {
  const { data, error, isLoading } = useSWR<MyApartments[], any, any>(
    `https://barsa-back.onrender.com/GetSimilar/${apartmentId}/${option}`,
    fetcher
  );

  return {
    similarApartments: data,
    isLoading,
    isError: error,
  };
};

export const SimilarApartments = ({ apartmentId }: MyProps) => {
  const [option, setOptiopn] = useState("price");
  const [priceTitles, setPriceTitles] = useState({
    summer: false,
    winter: false,
    apartment: 10,
  });

  const { similarApartments, isLoading, isError } = useSimilar(
    apartmentId,
    option
  );

  const showPriceTitle = (iconIndex: number, apartmentIndex: number) => {
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
    }, 3000);
  };

  const [size, setSize] = useState<any>({});
  const ref = useRef<HTMLDivElement>();

  const resizeHandler = () => {
    const { clientHeight, clientWidth }: any = ref.current || {};
    setSize({ clientHeight, clientWidth });
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const apartmentsInSimilar =
    size.clientWidth >= 1410
      ? 4
      : size.clientWidth <= 1410 && size.clientWidth >= 910
      ? 3
      : size.clientWidth <= 910 && size.clientWidth >= 610
      ? 2
      : 1;

  return (
    <div className={styles.similar} ref={ref as LegacyRef<HTMLDivElement>}>
      <div className={styles.similarInfo}>
        <p>Вам также могут понравиться</p>
        <span>
          Апартаменты похожие по
          {option === "price"
            ? " цене"
            : option === "services"
            ? " услугам"
            : option === "floor"
            ? " этажу"
            : " количеству комнат"}
        </span>
      </div>

      <Swiper
        slidesPerView={apartmentsInSimilar}
        spaceBetween={30}
        navigation
        modules={[Navigation, A11y]}
        className={styles.similarSlider}
      >
        {similarApartments?.map((apartment, index) => (
          <SwiperSlide key={apartment.apartmentName}>
            <Image
              src={apartment.images[0].image}
              fill
              sizes="790px"
              priority={index < 4 ? true : false}
              quality={100}
              alt={`test`}
              className={styles.similarSliderImage}
              style={{ objectFit: "cover" }}
            />

            <div className={styles.similarSliderBlock}>
              <div
                className={styles.similarSliderBlockPrice}
                onClick={() => showPriceTitle(0, index)}
              >
                <Sun />
                <p>{apartment.summerPrice} ₽</p>
                <span
                  className={`${
                    priceTitles.apartment === index && priceTitles.summer
                      ? styles.visible
                      : styles.hidden
                  }`}
                >
                  Летний сезон (с 1 июня по 1 октября)
                </span>
              </div>
              <div
                className={styles.similarSliderBlockPrice}
                onClick={() => showPriceTitle(1, index)}
              >
                <Snowflake />
                <p> {apartment.winterPrice} ₽</p>
                <span
                  className={`${
                    priceTitles.apartment === index && priceTitles.winter
                      ? styles.visible
                      : styles.hidden
                  }`}
                >
                  Зимний сезон (с 1 октября по 1 июня)
                </span>
              </div>

              <div className={styles.similarSliderBlockInfo}>
                <p className={styles.similarSliderBlockInfoName}>
                  Апартамент {apartment.apartmentName}
                </p>
                <span className={styles.similarSliderBlockInfoText}>
                  Размер апартамента: {apartment?.about.squareMeters} m²,
                  Количество комнат: &nbsp;
                  {apartment?.about.rooms}, Количество спальных мест:{" "}
                  {apartment?.about.sleepingPlaces},
                  {" " + apartment?.about.view}, Этаж {apartment?.about.floor},{" "}
                  {apartment?.about.balcony}!
                </span>

                <br />

                <Link
                  href={`Aparment-${apartment.apartmentName}`}
                  className={styles.similarSliderBlockInfoLink}
                >
                  Подробнее ➜
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.similarSelectOption}>
        <button onClick={() => setOptiopn("price")}>Пожие по цене</button>
        <button onClick={() => setOptiopn("services")}>Пожие по услугам</button>
        <button onClick={() => setOptiopn("rooms")}>
          Пожие по количеству комнат
        </button>
        <button onClick={() => setOptiopn("floor")}>Пожие по этажу</button>
      </div>
    </div>
  );
};
