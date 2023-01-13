import React from 'react';
import { Apartment } from '../../../../types/type';
import './style.scss';

interface MyProps {
  apartment: Apartment;
}

export const Price = ({ apartment }: MyProps) => {
  return (
    <div className="category-page-container__apartments-card__info__price">
      <div>
        <p>{apartment.summerPrice} ₽</p>
        <span>Летний сезон (с 1 июня по 1 октября)</span>
      </div>
      <div>
        <p>{apartment.winterPrice} ₽</p>
        <span>Зимний сезон (с 1 октября по 1 июня)</span>
      </div>
    </div>
  );
};
