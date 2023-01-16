import React, { useEffect } from 'react';
import { useAppSelector } from '../../../store/store';
import { SliderImages } from './slider images';
import { ApartmentInfo } from './apartment info';
import { categoryMeta } from '../../meta/categoryMeta';
import { useParams } from 'react-router-dom';
import { Apartment } from '../../types/type';

import './style.scss';

import { table } from '../../../backend/withoutBalcony';

interface MyParams {
  category: string;
  sort: string;
  options: string;
}

export const ApartmentCard = () => {
  const categoryPage = useAppSelector((state) => state.categoryPage);

  const { category, sort, options } = useParams<keyof MyParams>() as MyParams;

  const filterBy = categoryMeta(categoryPage.selectedPageId)?.filterBy;

  let apartments: any = [];

  const filterByPage = () => {
    if (filterBy?.length === 2) {
      apartments = table.filter((x) => x[filterBy[0] as keyof Apartment] === filterBy[1]);
    }
    if (filterBy?.length === 4) {
      apartments = table.filter(
        (x) =>
          x[filterBy[0] as keyof Apartment] === filterBy[1] &&
          x[filterBy[2] as keyof Apartment] === filterBy[3],
      );
    }
    if (options) {
      console.log(options.split('+'));

      const checkOptions = options.split('+');

      const view = checkOptions.find((x) => x === 'sea-view' || x === 'city-view');

      const balcony = checkOptions.find((x) => x === 'balcony');

      const oven = checkOptions.find((x) => x === 'oven');

      const dishwasher = checkOptions.find((x) => x === 'dishwasher');

      const coffeeMachine = checkOptions.find((x) => x === 'coffee-machine');

      if (view !== undefined) {
        apartments =
          view === 'sea-view'
            ? apartments.filter((x: Apartment) => x.view === true)
            : apartments.filter((x: Apartment) => x.view === false);
      }

      if (balcony !== undefined && balcony) {
        apartments = apartments.filter((x: Apartment) => x.balcony === true);
      }

      if (oven !== undefined && oven) {
        apartments = apartments.filter((x: Apartment) => x.oven === true);
      }

      if (dishwasher !== undefined && dishwasher) {
        apartments = apartments.filter((x: Apartment) => x.dishwasher === true);
      }

      if (coffeeMachine !== undefined && coffeeMachine) {
        apartments = apartments.filter((x: Apartment) => x.coffeeMachine === true);
      }
    }
  };

  filterByPage();
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

  apartments = apartments.sort(sorter(sortBy));

  return (
    <div className="category-page-container__apartments">
      {apartments.map((apartment: Apartment) => (
        <div className="category-page-container__apartments-card" key={apartment.name}>
          <SliderImages apartment={apartment} />

          <ApartmentInfo apartment={apartment} />
        </div>
      ))}
    </div>
  );
};
