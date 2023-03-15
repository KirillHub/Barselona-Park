'use client';
import { MyApartments } from '../../helpers/types/type';
import { useState } from 'react';
import styles from '../style.module.scss';
import useSWR from 'swr';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

interface MyProps {
  apartmentId: number;
}

import axios from 'axios';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const useSimilar = (apartmentId: number, option: string) => {
  const { data, error, isLoading } = useSWR<MyApartments[], any, any>(
    `https://barsa-back.onrender.com/GetSimilar/${apartmentId}/${option}`,
    fetcher,
  );

  return {
    similarApartments: data,
    isLoading,
    isError: error,
  };
};

export const SimilarApartments = ({ apartmentId }: MyProps) => {
  const [option, setOptiopn] = useState('price');

  const { similarApartments, isLoading, isError } = useSimilar(apartmentId, option);

  return (
    <div className={styles.similar}>
      <div className={styles.similarInfo}>
        <p>Вам также могут понравиться</p>
        <span>
          Апартаменты похожие по
          {option === 'price' ? ' цене' : option === 'services' ? ' услугам' : ' этажу'}
        </span>
      </div>

      <Swiper
        slidesPerView={4}
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
              className={styles.apartmentSliderImage}
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.similarSliderBlock}>
              <p className={styles.similarSliderBlockName}>Апартамент {apartment.apartmentName}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.similarSelectOption}>
        <button onClick={() => setOptiopn('price')}>Похожие по цене</button>
        <button onClick={() => setOptiopn('services')}>Похожие по услугам</button>
        <button onClick={() => setOptiopn('floor')}>Похожие по этажу</button>
      </div>
    </div>
  );
};
