import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { setApartment } from '../../store/apartment/slice';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SliderImages } from '../category page/apartments card/slider images';
import { ApartmentInfo } from '../category page/apartments card/apartment info';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { subDays, addDays } from 'date-fns';

import { table } from '../../backend/withoutBalcony';
import './style.scss';

interface MyParams {
  id: string;
}

export const Apartment = () => {
  const dispatch = useAppDispatch();
  const apartmentPage = useAppSelector((state) => state.apartmentPage);
  const { id } = useParams<keyof MyParams>() as MyParams;

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  // console.log(startDate, endDate);

  useEffect(() => {
    const apartment = table.find((x) => x.name === id);

    dispatch(setApartment(apartment));
  }, [id]);

  return (
    <div className="apartment-container">
      <div className="apartment-container__slider-info">
        {Object.keys(apartmentPage.apartment).length !== 0 ? (
          <>
            <SliderImages apartment={apartmentPage?.apartment} />
            <ApartmentInfo apartment={apartmentPage?.apartment} />
          </>
        ) : (
          ''
        )}
      </div>

      <div className="apartment-container__calendar">
        <DatePicker
          startDate={startDate}
          // selected={startDate}
          endDate={endDate}
          onChange={onChange}
          excludeDateIntervals={[
            { start: subDays(new Date(), 0), end: addDays(new Date(), 5) },
            { start: subDays(new Date(2023, 0, 31), 0), end: addDays(new Date(2023, 0, 31), 10) },
          ]}
          selectsRange
          minDate={subDays(new Date(), 0)}
          maxDate={addDays(new Date(), 365)}
          disabledKeyboardNavigation
          monthsShown={5}
          // showMonthYearDropdown
          calendarStartDay={1}
          inline
        />
      </div>
    </div>
  );
};
