import React, { useState } from 'react';
import { useAppSelector } from '../../../store/store';
import { SliderImages } from './slider images';
import { ApartmentInfo } from './apartment info';
import { useParams } from 'react-router-dom';

import './style.scss';

import { table } from '../../../backend/withoutBalcony';


interface MyParams {
  id: string;
  sort: string;
  options: string;
}

export const ApartmentCard = () => {
  const categoryPage = useAppSelector((state) => state.categoryPage);

  const { id, sort, options } = useParams<keyof MyParams>() as MyParams;

  const sorter = (field: string) => {
    if (categoryPage.checkSign[categoryPage.signIndex]) {
      return (a: any, b: any) =>
        +a[field].split(' ').join('') < +b[field].split(' ').join('') ? 1 : -1;
    } else {
      return (a: any, b: any) =>
        +a[field].split(' ').join('') > +b[field].split(' ').join('') ? 1 : -1;
    }
  };

  const sortBy =
    sort === 'Sorted-by-summer-season'
      ? 'summerPrice'
      : sort === 'Sorted-by-winter-season'
      ? 'winterPrice'
      : sort === 'Sorted-by-floor'
      ? 'floor'
      : sort === 'Sorted-by-number-of-rooms'
      ? 'rooms'
      : sort === 'Sorted-by-number-of-beds'
      ? 'sleepingPlaces'
      : 'squareMeters';

  const arr = table.sort(sorter(sortBy));

  console.log(id, sort, options, sortBy);

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
