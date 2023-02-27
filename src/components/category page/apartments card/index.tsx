'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { SliderImages } from './slider images';
import { ApartmentInfo } from './apartment info';
import { categoryMeta } from '../../meta/categoryMeta';
import { table } from '../../../backend/withoutBalcony';
import { Apartment } from '../../types/type';
import styles from './style.module.scss';
import useStore from '../../../store/useStore';


interface MyParams {
  sort: string;
  options: string;
}

export const ApartmentCard = () => {
  const checkSign = useStore((state) => state.checkSign);
  const signIndex = useStore((state) => state.signIndex);
  const pathname = usePathname();

  const sort = pathname?.split('/')[2];
  const options = pathname?.split('/')[3];
  const service = pathname?.split('/')[4];

  const filterBy = categoryMeta(sort)?.filterBy;

  let apartments: Apartment[] = [];

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
    if (service) {
      const checkOptions = service.split('+');

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
    if (checkSign[signIndex]) {
      return (a: any, b: any) =>
        +a[field].split(' ').join('') > +b[field].split(' ').join('') ? 1 : -1;
    } else {
      return (a: any, b: any) =>
        +a[field].split(' ').join('') < +b[field].split(' ').join('') ? 1 : -1;
    }
  };

  const sortBy = (() => {
    switch (options) {
      case 'Sorted-by-summer-season':
        return 'summerPrice';
      case 'Sorted-by-winter-season':
        return 'winterPrice';
      case 'Sorted-by-number-of-rooms':
        return 'rooms';
      case 'Sorted-by-number-of-beds':
        return 'sleepingPlaces';
      case 'Sorted-by-square-meters':
        return 'squareMeters';
      case 'Sorted-by-floor':
        return 'floor';
      default:
        return 'sort';
    }
  })();

  apartments.sort(sorter(sortBy));

  return (
    <div className={styles.categoryPageRightBlock}>
      {apartments.map((apartment: Apartment, index: number) => (
        <div className={styles.categoryPageRightBlockCard} key={apartment.name}>
          <div className={styles.categoryPageRightBlockCardSlider}>
            <SliderImages
              apartment={apartment}
              apartmentIndex={index}
              options={{
                className: styles.sliderImage,
                sizes: '375px',
                fit: 'fill',
                lazy: 1,
                quality: 75,
              }}
            />
          </div>

          <ApartmentInfo apartment={apartment} />
        </div>
      ))}
    </div>
  );
};
