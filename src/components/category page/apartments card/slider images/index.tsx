'use client';

import Image from 'next/image';
import { Apartment } from '../../../types/type';

import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import './style.scss';
import { useState } from 'react';

interface MyProps {
  apartment: Apartment;
  apartmentIndex: number;
}

export const SliderImages = ({ apartment, apartmentIndex }: MyProps) => {

  return (
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={5}
      slidesPerView={2}
      navigation
      className="category-page-container__apartments-card__images">
      {apartment.pictures.map((picture, index) => (
        <span key={picture.id}>
          {apartmentIndex < 4 ? (
            index < 2 ? (
              <SwiperSlide key={picture.id}>
                <div className="category-page-container__apartments-card__images-picture">
                  <Image
                    priority
                    fill
                    sizes="400px"
                    style={{ objectFit: 'cover' }}
                    alt={`Фотография Апартамента ${picture.id.split('-')[0]}. Номер ${
                      picture.id.split('-')[1]
                    }`}
                    src={picture.img}
                  />
                </div>
              </SwiperSlide>
            ) : (
              <SwiperSlide key={picture.id}>
                <div className="category-page-container__apartments-card__images-picture">
                  <Image
                    fill
                    sizes="300px"
                    style={{ objectFit: 'cover' }}
                    alt={`Фотография Апартамента ${picture.id.split('-')[0]}. Номер ${
                      picture.id.split('-')[1]
                    }`}
                    src={picture.img}
                  />
                </div>
              </SwiperSlide>
            )
          ) : (
            <SwiperSlide key={picture.id}>
              <div className="category-page-container__apartments-card__images-picture">
                <Image
                  fill
                  sizes="375px"
                  style={{ objectFit: 'cover' }}
                  alt={`Фотография Апартамента ${picture.id.split('-')[0]}. Номер ${
                    picture.id.split('-')[1]
                  }`}
                  src={picture.img}
                />
              </div>
            </SwiperSlide>
          )}
        </span>
      ))}
    </Swiper>
  );
};

//  style={{
//                       width: 'calc(86px + 287 * (100vw / 1920))',
//                       height: 'calc(165px + 105 * (100vw / 1920))',
//                     }}
