import React from 'react';
import { Apartment } from '../../../../types/type';
import './style.scss';

interface MyProps {
  apartment: Apartment;
}

export const ImportantInfo = ({ apartment }: MyProps) => {
  return (
    <div className="category-page-container__apartments-card__info__important-info">
      <span>Комнат - {apartment.rooms}</span>
      <span>Спальных мест - {apartment.sleepingPlaces}</span>
      <span>кв. м - {apartment.squareMeters}</span>
      <span>Этаж - {apartment.floor}</span>
    </div>
  );
};
