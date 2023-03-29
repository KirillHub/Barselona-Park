"use client";

import "./style.scss";
import "react-datepicker/dist/react-datepicker.css";
import "moment/locale/ru";

import { addDays, subDays } from "date-fns";
import { forwardRef, useEffect, useRef, useState } from "react";
import useSWR, { useSWRConfig } from "swr";

import Captcha from "@/share/captcha";
import DatePicker from "react-datepicker";
import { ErrorMessage } from "@hookform/error-message";
import InputMask from "react-input-mask";
import { MyApartments } from "@/types/type";
import axios from "axios";
import { calculateSum } from "@/helpers/functions/calculateSum";
import moment from "moment";
import { reservationDays } from "../../../helpers/functions/reservationDays";
import ru from "date-fns/locale/ru";
import styles from "./style.module.scss";
import { useForm } from "react-hook-form";
import useStore from "@/store/useStore";

interface MyProps {
  apartment: MyApartments;
}

const fetcher = (url: string) => axios.get(url).then(res => res.data);

const useSimilar = (apartmentName: number) => {
  const { data, error, isLoading, mutate } = useSWR<string[], any, any>(
    `http://localhost:3500/Booking/GetExcludedDates/${apartmentName}`,
    fetcher,
    { refreshInterval: 1000 }
  );

  const readyData = data?.map(date => {
    const dateParts = date?.split(".");
    const dateObject = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`);
    return dateObject;
  });

  return {
    excludedDates: readyData,
    isLoading,
    isError: error,
    mutate,
  };
};

export const CustomerInformation = ({ apartment }: MyProps) => {
  const setBookingPrice = useStore(state => state.setBookingPrice);
  const setBookingDates = useStore(state => state.setBookingDates);
  const setBookingStartEnd = useStore(state => state.setBookingStartEnd);
  const setBookingFullName = useStore(state => state.setBookingFullName);
  const setBookingEmail = useStore(state => state.setBookingEmail);
  const setBookingNumber = useStore(state => state.setBookingNumber);
  const setBookingAdults = useStore(state => state.setBookingAdults);
  const setBookingChildren = useStore(state => state.setBookingChildren);
  const setBookingComment = useStore(state => state.setBookingComment);

  const bookingNumber = useStore(state => state.bookingNumber);

  const { excludedDates, isLoading, isError, mutate } = useSimilar(apartment.apartmentName);

  function getFirstAvailableDay() {
    const bookedDates = excludedDates?.map(day => new Date(day));

    let currentDay = new Date();

    while (currentDay.getFullYear() === new Date().getFullYear()) {
      if (!bookedDates?.find(date => date.toDateString() === currentDay.toDateString())) {
        return currentDay;
      }
      currentDay.setDate(currentDay.getDate() + 1);
    }

    return null;
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const [checkErrors, setCheckErrors] = useState(errors);

  const handleCaptchaVerify = () => {
    setIsCaptchaVerified(true);
  };


  const onSubmit = async (data: any) => {
    if (endDate !== null && startDate !== null) {
      const days = reservationDays(startDate, endDate, excludedDates);
      const sum = calculateSum(days, {
        summerPrice: apartment.summerPrice,
        winterPrice: apartment.winterPrice,
      });

      const booking = {
        fullName: data.fullName,
        phoneNumber: data.phoneNumber,
        email: data.email,
        dates: days.map(date => date.toLocaleDateString()),
        numberOfPeople: data.adults,
        numberOfChildren: data.children,
        bookingPrice: sum,
        comment: data.comment,
        checkInDay: startDate.toLocaleDateString(),
        checkOutDay: endDate.toLocaleDateString(),
        canceled: false,
      };

      let currentDate = endDate;

      let currentDay = endDate.getDate();

      currentDate.setDate(currentDay + 1);
      setStartDate(currentDate);
      setEndDate(null);


      handleClick(booking);
      reset();
      setBookingNumber("+7 (___) ___-__-__");

      await mutate();
    } else if (isCaptchaVerified === false) {
      setCheckErrors(Object.assign(errors, { captcha: 0 }));
    }

    setIsCaptchaVerified(false);
  };

  const handleClick = async (booking: any) => {
    await axios
      .patch(`http://localhost:3500/Booking/BookApartment/${apartment.apartmentName}`, booking)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error.response.data.message);
      });
  };

  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const StartCustomDate = forwardRef(({ value, onClick }: any, ref) => (
    <input
      type='text'
      value={value!?.length > 0 ? `C ${value}` : "Выберите дату заезда"}
      readOnly
      style={{ height: "100%" }}
    />
  ));

  const EndCustomDate = forwardRef(({ value, onClick }: any, ref) => (
    <input
      type='text'
      value={value!?.length > 0 ? `По ${value}` : "Выберите дату выезда"}
      readOnly
      style={{ height: "100%" }}
    />
  ));

  StartCustomDate.displayName = "StartCustomDate";
  EndCustomDate.displayName = "EndCustomDate";

  useEffect(() => {
    if (endDate !== null && startDate !== null) {
      const days = reservationDays(startDate, endDate, excludedDates);
      const sum = calculateSum(days, {
        summerPrice: apartment.summerPrice,
        winterPrice: apartment.winterPrice,
      });

      const formattedDays = days.map(date => moment(date).locale("ru").format("D MMMM YYYY"));

      setBookingPrice(sum);
      setBookingDates(formattedDays);
      setBookingStartEnd({
        start: moment(startDate).locale("ru").format("DD MMMM YYYY"),
        end: moment(endDate).locale("ru").format("DD MMMM YYYY"),
      });
    }
  }, [endDate]);

  useEffect(() => {
    if (isLoading === false) {
      setStartDate(getFirstAvailableDay());
    }
  }, [isLoading]);

  useEffect(() => {
    if (Object.keys(checkErrors).length === 0) {
      setCheckErrors(errors);
    } else {
      setCheckErrors(prev => Object.assign(prev, errors));
    }
  }, [errors]);

  return (
    <div className={styles.customer}>
      <div className={styles.customer__datePicker}>
        {startDate === null && isLoading === false ? (
          ""
        ) : (
          <DatePicker
            startDate={startDate}
            endDate={endDate}
            locale={ru}
            onChange={onChange}
            excludeDates={excludedDates}
            selectsRange
            minDate={subDays(new Date(), 0)}
            maxDate={addDays(new Date(), 365)}
            monthsShown={4}
            calendarStartDay={1}
            inline
            fixedHeight
          />
        )}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.customer__form}>
        <div className={styles.customer__form_content}>
          <input
            type='text'
            placeholder='ФИО'
            value='Михаил Сердюков Анатольевич'
            {...register("fullName", {
              required: "ФИО не заполнено",
              minLength: { value: 2, message: "Минимум 2 символа" },
            })}
            onChange={e => setBookingFullName(e.target.value)}
          />

          <input
            type='text'
            placeholder='Email'
            value='thebizi15@gmail.com'
            {...register("email", {
              required: "Email не заполнен",
              minLength: { value: 5, message: "Минимум 5 символов" },
              pattern: { value: /^\S+@\S+$/i, message: "Вот пример почты ivanov@mail.ru" },
            })}
            onChange={e => setBookingEmail(e.target.value)}
          />

          <InputMask
            id='phone'
            type='tel'
            mask='+7 (999) 999-99-99'
            value='+7 (999) 999-99-99'
            {...register("phoneNumber", {
              required: "Введите номер телефона",
              minLength: { value: 8, message: "Минимум 8 символов" },
              maxLength: { value: 18, message: "Максимум 18 символов" },
            })}
            placeholder='+7 (___) ___-__-__'
            onChange={e => setBookingNumber(e.target.value)}
          />

          <select {...register("adults")} onChange={e => setBookingAdults(e.target.value)}>
            <option defaultValue='Взрослых' disabled>
              Взрослых
            </option>
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
          </select>

          <select {...register("children")} onChange={e => setBookingChildren(e.target.value)}>
            <option defaultValue='Взрослых' disabled>
              Детей
            </option>
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </select>

          <input
            type='text'
            placeholder='Комментарий'
            maxLength={300}
						value="Комментарий оставил тут"
            {...register("comment")}
            onChange={e => setBookingComment(e.target.value)}
          />

          <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            locale={ru}
            dateFormat='d MMMM, yyyy'
            customInput={<StartCustomDate />}
          />

          <DatePicker
            selected={endDate}
            onChange={(date: Date) => setStartDate(date)}
            locale={ru}
            dateFormat='d MMMM, yyyy'
            customInput={<EndCustomDate />}
          />
        </div>

        {Object.keys(Object.assign(checkErrors)).length > 0 ? (
          <div className={styles.customer__error}>
            <ErrorMessage
              errors={errors}
              name='Email'
              as={<p className={styles.customer__error_text} />}
            />
            <ErrorMessage
              errors={errors}
              name='fullName'
              as={<p className={styles.customer__error_text} />}
            />
            <ErrorMessage
              errors={errors}
              name='mobileNumber'
              as={<p className={styles.customer__error_text} />}
            />
            {isCaptchaVerified ? "" : "Пройдите капчу"}
          </div>
        ) : (
          ""
        )}

        <div className={styles.customer__form_submit}>
          <div>
            <Captcha onVerify={handleCaptchaVerify} />
          </div>

          <button type='submit'>Забронировать</button>
        </div>
      </form>
    </div>
  );
};
