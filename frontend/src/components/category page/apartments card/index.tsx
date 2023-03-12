'use client';
import { useCallback, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { SliderImages } from './slider images';
import { ApartmentInfo } from './apartment info';
import { categoryMeta } from '../../helpers/meta/categoryMeta';
import { apartmentsData } from '../../../fake/apartmnetsData';
import { Apartment } from '../../helpers/types/type';
import styles from './style.module.scss';
import useStore from '../../../store/useStore';

interface MyParams {
  sort: string;
  options: string;
}

interface MyProps {
  apartment: Apartment;
  index: number;
}

export const ApartmentCard = ({ apartment, index }: MyProps) => {
  const setApartmentsLength = useStore((state) => state.setApartmentsLength);

  const checkSign = useStore((state) => state.checkSign);
  const signIndex = useStore((state) => state.signIndex);

  const pathname = usePathname();

  const sort = pathname?.split('/')[2];
  const options = pathname?.split('/')[3];
  const service = pathname?.split('/')[4];

  const filterBy = categoryMeta(sort)?.filterBy;

  // let apartments: Apartment[] = apartmentsData;

  // const filterByPage = () => {
  //   if (filterBy?.length === 2) {
  //     apartments = apartmentsData.filter((x) => x[filterBy[0] as keyof Apartment] === filterBy[1]);
  //   }
  //   if (filterBy?.length === 4) {
  //     apartments = apartmentsData.filter(
  //       (x) =>
  //         x[filterBy[0] as keyof Apartment] === filterBy[1] &&
  //         x[filterBy[2] as keyof Apartment] === filterBy[3],
  //     );
  //   }
  //   if (service) {
  //     const checkOptions = service.split('+');

  //     const view = checkOptions.find((x) => x === 'sea-view' || x === 'city-view');

  //     const balcony = checkOptions.find((x) => x === 'balcony');

  //     const oven = checkOptions.find((x) => x === 'oven');

  //     const dishwasher = checkOptions.find((x) => x === 'dishwasher');

  //     const coffeeMachine = checkOptions.find((x) => x === 'coffee-machine');

  //     if (view !== undefined) {
  //       apartments =
  //         view === 'sea-view'
  //           ? apartments.filter((x: Apartment) => x.about.view === 'Вид на море')
  //           : apartments.filter((x: Apartment) => x.about.view === 'Вид на город');
  //     }

  //     if (balcony !== undefined && balcony) {
  //       apartments = apartments.filter((x: Apartment) => x.about.balcony === 'С балконом');
  //     }

  //     if (oven !== undefined && oven) {
  //       apartments = apartments.filter((x: Apartment) => x.services.stove === true);
  //     }

  //     if (dishwasher !== undefined && dishwasher) {
  //       apartments = apartments.filter((x: Apartment) => x.services.dishwasher === true);
  //     }

  //     if (coffeeMachine !== undefined && coffeeMachine) {
  //       apartments = apartments.filter((x: Apartment) => x.services.coffeeMachine === true);
  //     }
  //   }
  // };

  // filterByPage();

  // const sorter = (field: string) => {
  //   if (checkSign[signIndex]) {
  //     return (a: any, b: any) =>
  //       +a[field].split(' ').join('') > +b[field].split(' ').join('') ? 1 : -1;
  //   } else {
  //     return (a: any, b: any) =>
  //       +a[field].split(' ').join('') < +b[field].split(' ').join('') ? 1 : -1;
  //   }
  // };

  // const sortBy = (() => {
  //   switch (options) {
  //     case 'Sorted-by-summer-season':
  //       return 'summerPrice';
  //     case 'Sorted-by-winter-season':
  //       return 'winterPrice';
  //     case 'Sorted-by-number-of-rooms':
  //       return 'rooms';
  //     case 'Sorted-by-number-of-beds':
  //       return 'sleepingPlaces';
  //     case 'Sorted-by-square-meters':
  //       return 'squareMeters';
  //     case 'Sorted-by-floor':
  //       return 'floor';
  //     default:
  //       return 'sort';
  //   }
  // })();

  //  'http://localhost:3500/addNewApartment'

  // useEffect(() => {
  //   setApartmentsLength(apartments.length);
  // }, [apartments.length]);

  return (
    <div className={styles.categoryPageRightBlockCard}>
      <div className={styles.categoryPageRightBlockCardSlider}>
        <SliderImages
          apartment={apartment}
          apartmentIndex={index}
          options={{
            className: styles.sliderImage,
            sizes:
              'calc(60px + 420 * (100vw / 1920)), (max-width: 805px) calc(100px + 225 * (100vw / 805)), (max-width: 605px) calc(5px + 465 * (100vw / 605))',
            fit: 'contain',
            border: 5,
            lazy: 1,
            quality: 75,
          }}
        />
      </div>

      <ApartmentInfo apartment={apartment} />
    </div>
  );
};
