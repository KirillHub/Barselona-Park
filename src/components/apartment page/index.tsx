'use client';
import { useEffect, useState } from 'react';
// import { useAppDispatch, useAppSelector } from '../../store/store';
// import { setApartment } from '../../store/apartment/slice';

import { SliderImages } from '../category page/apartments card/slider images';
import { ApartmentInfo } from '../category page/apartments card/apartment info';
import DatePicker from 'react-datepicker';
import { useForm } from 'react-hook-form';
import ru from 'date-fns/locale/ru';
import { subDays, addDays } from 'date-fns';
import { usePathname } from 'next/navigation';
import { table } from '../../backend/withoutBalcony';
import 'react-datepicker/dist/react-datepicker.css';
import './style.scss';
import { start } from 'repl';

import Image from 'next/image';

export const Apartment = () => {
  // const dispatch = useAppDispatch();
  // const apartmentPage = useAppSelector((state) => state.apartmentPage);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log();
  // console.log(errors);

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

  const booking = [
    { start: new Date(2023, 1, 8), end: new Date(2023, 1, 10) },
    { start: new Date(2023, 1, 14), end: new Date(2023, 1, 15) },
  ];

  const newBok = [];

  for (let i = 0; i < booking.length; i++) {
    newBok.push({ start: subDays(booking[i].start, 0), end: addDays(booking[i].end, 0) });
  }

  const userReservation = {
    days: [],
    email: 'bizi@gmail.com',
    phoneNumber: '+7 (981) 654-32-10',
    fullName: 'Boris Borisovich',
    comment: 'Мы готовы приехать',
    bookingTime: new Date(),
    peopleNumber: '',
    children: '',
    animals: '',
  };

  const bron = [
    {
      start: new Date('Mon Feb 06 2023'),
      end: new Date('Sun Mar 12 2023'),
    },
  ];

  function getNumberOfDays(start: Date, end: Date) {
    const date1 = new Date(start);
    const date2 = new Date(end);

    const oneDay = 1000 * 60 * 60 * 24;

    const diffInTime = date2.getTime() - date1.getTime();

    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
  }

  const between = bron.map((x) => getNumberOfDays(x.start, x.end));

  const asa = [];

  for (let i = 0; i < between.length; i++) {
    for (let j = 1; j < between[i]; j++) {
      const date = new Date(bron[i].start);

      date.setDate(date.getDate() + j);

      asa.push(date);
    }

    asa.unshift(bron[i].start);
    asa.push(bron[i].end);
  }

  const most = asa.sort(function (a, b) {
    return a.getTime() - b.getTime();
  });

  const suki = [
    'Wed Feb 08 2023',
    'Thu Feb 09 2023',
    'Fri Feb 10 2023',
    'Tue Feb 14 2023',
    'Wed Feb 15 2023',
    'Thu Feb 16 2023',
    'Sat Feb 18 2023',
    'Sun Feb 19 2023',
    'Wed Mar 08 2023',
    'Thu Mar 09 2023',
    'Fri Mar 10 2023',
  ].map((x) => new Date(x));

  const blay = most.filter((x) =>
    suki.every((elem) => elem.toDateString() !== x.toDateString()) ? x : '',
  );

  if (apartment === undefined) return <div>Загрузка</div>;
  return (
    <>
      <div className="new-container">
        <div className="top-block">
          <div className="left">
            <div className="apartment-name">
              <span className="apartment-name-1">АПАРТАМЕНТ {apartment.name}</span>
            </div>
            <div className="apartment-price">
              <div className="price">
                <span className="price-span-top">{apartment.summerPrice} ₽</span>
                <br />
                <span className="price-span-down">
                  Летний сезон <br /> (с 1 июня по 1 октября)
                </span>
              </div>
              <div className="price">
                <span className="price-span-top">{apartment.winterPrice} ₽</span> <br />
                <span className="price-span-down">
                  Зимний сезон <br />
                  (с 1 октября по 1 июня)
                </span>
              </div>
            </div>
          </div>

          <div className="div-img">
            <SliderImages
              apartment={apartment}
              apartmentIndex={0}
              options={{
                className: 'category-page-container__apartments-card__images-picture-2',
                sizes: '600px',
                fit: 'fill',
                lazy: 1,
                quality: 100,
              }}
            />
          </div>
        </div>

        <div className="bottom-block">
          <div className="bottom-left">1</div>
          <div className="apartment-container__calendar">
            <DatePicker
              startDate={startDate}
              endDate={endDate}
              locale={ru}
              onChange={onChange}
              excludeDates={suki}
              selectsRange
              minDate={subDays(new Date(), 0)}
              maxDate={addDays(new Date(), 365)}
              monthsShown={3}
              calendarStartDay={1}
              inline
              fixedHeight
            />

            <form className="calendar-form" onSubmit={handleSubmit(onSubmit)}>
              <p>
                <input
                  className="text-input"
                  type="text"
                  placeholder="Имя Фамилия"
                  {...register('Имя Фамилия', { required: true, maxLength: 120 })}
                />
                <input
                  className="text-input"
                  type="tel"
                  placeholder="Номер телефона"
                  {...register('Номер телефона', { required: true, maxLength: 12 })}
                />
              </p>
              <p>
                <input
                  className="text-input"
                  type="text"
                  placeholder="Email"
                  {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
                />
                <input
                  className="text-input"
                  type="text"
                  placeholder="Комментарий"
                  {...register('Комментарий', { required: true, maxLength: 180 })}
                />
              </p>

              <p className="select-checkbox">
                <div className="select">
                  <label>Укажите количество людей</label>
                  <select
                    placeholder="Количество людей"
                    {...register('Количество людей', { required: true })}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </select>
                </div>

                <span className="checkbox">
                  <span>
                    <label>Дети</label>
                    <input
                      type="checkbox"
                      placeholder="Дети"
                      {...register('Дети', { required: true })}
                    />
                  </span>
                  <span>
                    <label>Животные</label>
                    <input type="checkbox" placeholder="Животные" {...register('Животные', {})} />
                  </span>
                </span>
              </p>
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Apartment;

// <div className="apartment-container__slider-info">
//     <ApartmentInfo apartment={apartment} />
//     <SliderImages apartment={apartment} apartmentIndex={0} />
//   </div>

//   <div className="apartment-container__calendar">
//     <DatePicker
//       startDate={startDate}
//       endDate={endDate}
//       locale={ru}
//       onChange={onChange}
//       excludeDates={suki}
//       selectsRange
//       minDate={subDays(new Date(), 0)}
//       maxDate={addDays(new Date(), 365)}
//       disabledKeyboardNavigation
//       monthsShown={3}
//       calendarStartDay={1}
//       inline
//     />

//     </div>
//   </div>

//  <title>{apartmentPage.apartment.meta?.title}</title>
//         <meta name="description" content={apartmentPage.apartment.meta?.description} />
//         <meta name="keywords" content={apartmentPage.apartment.meta?.keywords} />
//         <meta name="Document-state" content="Dynamic" />
//         <meta name="Author" content="https://github.com/bi-zi" />
//         <meta name="Copyright" content="bi_zi" />
