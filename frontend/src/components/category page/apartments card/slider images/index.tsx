"use client";

import "swiper/css/navigation";
import "swiper/css";
import "./style.scss";

import { A11y, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import { MyApartments } from "../../../../helpers/types/type";
import styles from "../style.module.scss";
import { useRouter } from "next/navigation";

interface MyProps {
  apartment: MyApartments;
  apartmentIndex: number;
  options: {
    sizes: string;
    fit: "contain" | "cover" | "fill" | "none" | "scale-down";
    lazy: number;
    border: number;
    quality: number;
  };
}

export const SliderImages = ({
  apartment,
  apartmentIndex,
  options,
}: MyProps) => {
  const router = useRouter();
  const handleClick = () =>
    router.push(`/Apartment-${apartment.apartmentName}`);

  return (
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={0}
      slidesPerView={options?.lazy}
      navigation
      className={styles.slider}
    >
      {apartment.images.map((picture, index) => (
        <SwiperSlide key={picture.id} className={styles.slider__content}>
          <Image
            className={styles.slider__images}
            src={picture.image}
            fill
            sizes={options?.sizes}
            quality={options?.quality}
            priority={
              apartmentIndex < 5
                ? index < options?.lazy
                  ? true
                  : false
                : false
            }
            alt={`Фотография Апартамента ${picture.id.split("-")[0]}. Номер ${
              picture.id.split("-")[1]
            }`}
            onClick={handleClick}
          />
          <p> Фотография загружается...</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
