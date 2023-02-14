'use client';

import Image from 'next/image';
import { Apartment } from '../../../types/type';
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './style.scss';

interface MyProps {
  apartment: Apartment;
  apartmentIndex: number;
  options: {
    className: string | any;
    sizes: string;
    fit: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
    lazy: number;
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
      className="category-page-container__apartments-card__images">
      {apartment.pictures.map((picture, index) => (
        <span key={picture.id}>
          <SwiperSlide key={picture.id}>
            <div className={options?.className}>
              <Image
                priority={apartmentIndex < 2 ? (index < options?.lazy ? true : false) : false}
                fill
                quality={options?.quality}
                sizes={options?.sizes}
                style={{ objectFit: options?.fit, }}
                src={picture.img}
                alt={`Фотография Апартамента ${picture.id.split('-')[0]}. Номер ${
                  picture.id.split('-')[1]
                }`}
              />
            </div>
          </SwiperSlide>
        </span>
      ))}
    </Swiper>
  );
};
