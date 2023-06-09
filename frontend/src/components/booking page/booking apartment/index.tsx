"use client";

import { Bed, Blueprint, Rooms, Stairs } from "@/svg";

import Image from "next/image";
import { MyApartments } from "@/types/type";
import { readyIcons } from "@/helpers/functions/readyIcons";
import { serviceIcons } from "@/share/serviceIcons";
import styles from "./style.module.scss";
import { useState } from "react";

interface MyProps {
  apartment: MyApartments;
}

export const BookingApartment = ({ apartment }: MyProps) => {
  const service = serviceIcons();
  const icons = readyIcons(apartment, service);

  const [showService, setShowService] = useState(false);
  const [reset, setReset] = useState<NodeJS.Timeout>();
  const [titles, setTitles] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const showTitle = (iconIndex: number) => {
    clearTimeout(reset);
    setTitles(titles.map((title, index) => (index === iconIndex ? true : false)));

    const id = setTimeout(() => {
      setTitles(prev => prev.map((title, index) => (index === iconIndex ? false : false)));
    }, 2000);
    setReset(id);
  };


  return (
    <div className={styles.booking__apartment}>
      <h3>Апартамент {apartment.apartmentName}</h3>

      <div className={styles.booking__content}>
        <div className={styles.booking__mainImage}>
          <Image
            fill
            priority
            src={apartment.images[0].image}
            alt='1'
            className={styles.booking__mainImage_img}
          />
        </div>

        <div className={styles.booking__info}>
          <div className={styles.booking__price}>
            <p>
              <span>{apartment.summerPrice} ₽</span>
              <span>Летний сезон (с 1 июня по 1 октября)</span>
            </p>
            <p>
              <span>{apartment.winterPrice} ₽</span>
              <span>Зимний сезон (с 1 октября по 1 июня)</span>
            </p>
          </div>

          <div className={styles.booking__description}>
            <div className={styles.options__icons}>
              <div>
                <Rooms />
              </div>
              <p> Комнат - {apartment.about.rooms}</p>
            </div>

            <div className={styles.options__icons}>
              <div>
                <Blueprint />
              </div>
              <p>Размер - {apartment.about.squareMeters} m²</p>
            </div>

            <div className={styles.options__icons}>
              <div>
                <Bed />
              </div>
              <p>Мест - {apartment.about.sleepingPlaces}</p>
            </div>

            <div className={styles.options__icons}>
              <div>
                <Stairs />
              </div>
              <p>Этаж - {apartment.about.floor}</p>
            </div>
          </div>

          <div className={styles.booking__services}>
            {icons.map((icon, index) =>
              icon.title.length > 0 ? (
                <div
                  onClick={() => showTitle(index)}
                  key={icon.title}
                  className={styles.booking__services_icon}
                >
                  {icon.jsx}
                  <span className={`${titles[index] ? "visible" : "hidden"}`}>{icon.title}</span>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
