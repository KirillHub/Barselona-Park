import React from 'react';
import { SliderImages } from './slider images';
import { ApartmentInfo } from './apartment info';
import './style.scss';

import { table } from '../../../backend/withoutBalcony';

export const ApartmentCard = () => {
  const arr = table;

  return (
    <div className="category-page-container__apartments">
      {arr.map((apartment) => (
        <div className="category-page-container__apartments-card" key={apartment.name}>
          <SliderImages apartment={apartment} />

          <ApartmentInfo apartment={apartment} />
        </div>
      ))}
    </div>
  );
};
