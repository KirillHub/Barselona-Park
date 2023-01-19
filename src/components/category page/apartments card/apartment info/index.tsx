import { ImportantInfo } from './important info';
import { Price } from './price';
import { TitleAndButton } from './title and button';
import { Icons } from './icons';
import { Apartment } from '../../../types/type';

import './style.scss';

interface MyProps {
  apartment: Apartment;
}

export const ApartmentInfo = ({ apartment }: MyProps) => {
  return (
    <div className="category-page-container__apartments-card__info">
      <TitleAndButton apartment={apartment} />

      <Price apartment={apartment} />

      <ImportantInfo apartment={apartment} />

      <Icons apartment={apartment} />
    </div>
  );
};
