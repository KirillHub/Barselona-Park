'use client';
import { useEffect, useState } from 'react';
// import { useAppDispatch, useAppSelector } from '../../store/store';
// import { setApartment } from '../../store/apartment/slice';

import { SliderImages } from '../category page/apartments card/slider images';
import { ApartmentInfo } from '../category page/apartments card/apartment info';
import DatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import { subDays, addDays } from 'date-fns';
import { usePathname } from 'next/navigation';
import { table } from '../../backend/withoutBalcony';
import 'react-datepicker/dist/react-datepicker.css';
import './style.scss';

export const Apartment = () => {
  // const dispatch = useAppDispatch();
  // const apartmentPage = useAppSelector((state) => state.apartmentPage);

  const [startDate, setStartDate] = useState(new Date());

  const [endDate, setEndDate] = useState(null);
  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const pathname = usePathname();
  const apartmentId = pathname?.split('/')[2];

  const apartment = table.find((x) => x.name === apartmentId);

  const reservation = {
    startDay: startDate,
    endDay: endDate,
    betweenStartDay: new Date(2023, 1, 10),
    betweenEndDay: new Date(2023, 1, 15),
    email: 'bizi@gmail.com',
    phoneNumber: '+7 (981) 654-32-10',
    fullName: 'Boris Borisovich',
    comment: 'Мы готовы приехать',
    bookingTime: new Date(),
    peopleNumber: '',
    children: '',
    animals: '',

  };

  console.log(reservation);

  if (apartment === undefined) return <div>Загрузка</div>;
  return (
    <>
      <div className="apartment-container">
        <div className="apartment-container__slider-info">
          <ApartmentInfo apartment={apartment} />
          <SliderImages apartment={apartment} apartmentIndex={0} />
        </div>

        <div className="apartment-container__calendar">
          <DatePicker
            startDate={startDate}
            endDate={endDate}
            locale={ru}
            onChange={onChange}
            excludeDateIntervals={[
              { start: subDays(new Date(2023, 1, 10), 0), end: addDays(new Date(2023, 1, 15), 0) },
            ]}
            selectsRange
            minDate={subDays(new Date(), 0)}
            maxDate={addDays(new Date(), 365)}
            disabledKeyboardNavigation
            monthsShown={3}
            calendarStartDay={1}
            inline
          />

          <div>Забронировать</div>
        </div>
      </div>
    </>
  );
};
export default Apartment;

//  <title>{apartmentPage.apartment.meta?.title}</title>
//         <meta name="description" content={apartmentPage.apartment.meta?.description} />
//         <meta name="keywords" content={apartmentPage.apartment.meta?.keywords} />
//         <meta name="Document-state" content="Dynamic" />
//         <meta name="Author" content="https://github.com/bi-zi" />
//         <meta name="Copyright" content="bi_zi" />
