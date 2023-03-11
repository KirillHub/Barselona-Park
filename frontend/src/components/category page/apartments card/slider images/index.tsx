'use client';

import Image from 'next/image';
import { Apartment } from '../../../helpers/types/type';
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import styles from '../style.module.scss';

interface MyProps {
  apartment: Apartment;
  apartmentIndex: number;
  options: {
    className: string | any;
    sizes: string;
    fit: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
    lazy: number;
    border: number;
    quality: number;
  };
}

export const SliderImages = ({ apartment, apartmentIndex, options }: MyProps) => {
  return (
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={5}
      slidesPerView={options?.lazy}
      navigation
      className={styles.slider}
    >
      {apartment.images.map((picture, index) => (
        <span key={picture.id}>
          <SwiperSlide key={picture.id}>
            <div className={options?.className}>
              <span className={styles.sliderImageSpan}> Фотография загружается...</span>
              <Image
                src={picture.image}
                fill
                sizes={options?.sizes}
                quality={options?.quality}
                priority={apartmentIndex < 2 ? (index < options?.lazy ? true : false) : false}
                alt={`Фотография Апартамента ${picture.id.split('-')[0]}. Номер ${
                  picture.id.split('-')[1]
                }`}
                style={{
                  objectFit: options?.fit,
                  borderTopRightRadius: `calc(${options.border}px + ${options.border} * (100vw / 1920))`,
                  borderTopLeftRadius: `calc(${options.border}px + ${options.border} * (100vw / 1920))`,
                }}
              />
            </div>
          </SwiperSlide>
        </span>
      ))}
    </Swiper>
  );
};
