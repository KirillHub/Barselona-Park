"use client";

import "./style.scss";
import "react-datepicker/dist/react-datepicker.css";
import "moment/locale/ru";

import { addDays, subDays } from "date-fns";
import { forwardRef, useEffect, useRef, useState } from "react";

import DatePicker from "react-datepicker";
import { ErrorMessage } from "@hookform/error-message";
import InputMask from "react-input-mask";
import { MyApartments } from "@/types/type";
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  // console.log(errors);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

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
    />
  ));

  const EndCustomDate = forwardRef(({ value, onClick }: any, ref) => (
    <input
      type='text'
      value={value!?.length > 0 ? `По ${value}` : "Выберите дату выезда"}
      readOnly
    />
  ));

  StartCustomDate.displayName = "StartCustomDate";
  EndCustomDate.displayName = "EndCustomDate";

  const excludedDates = [
    "Mar 28 2023",
    "Mar 29 2023",
    "Mar 30 2023",
    "Mar 31 2023",

    "Apr 12 2023",
    "Apr 13 2023",
    "Apr 14 2023",
    "Apr 15 2023",
  ].map(x => new Date(x));

  useEffect(() => {
    if (endDate !== null) {
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

  return (
    <div className={styles.customer}>
      <div className={styles.customer__datePicker}>
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
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.customer__form}>
        <input
          type='text'
          placeholder='ФИО'
          {...register("fullName", {
            required: "ФИО не заполнено",
            minLength: { value: 2, message: "Минимум 2 символа" },
          })}
          onChange={e => setBookingFullName(e.target.value)}
        />
        <ErrorMessage errors={errors} name='fullName' />
        <input
          type='text'
          placeholder='Email'
          {...register("Email", {
            required: true,
            minLength: { value: 5, message: "Минимум 5 символов" },
            pattern: { value: /^\S+@\S+$/i, message: "Пример ivanov@mail.ru" },
          })}
          onChange={e => setBookingEmail(e.target.value)}
        />
        <ErrorMessage errors={errors} name='Email' />

        <InputMask
          id='phone'
          type='tel'
          mask='+7 (999) 999-99-99'
          {...register("mobileNumber", {
            required: "Введите номер телефона",
            minLength: { value: 8, message: "Минимум 8 символов" },
            maxLength: { value: 18, message: "Максимум 18 символов" },
          })}
          placeholder='+7 (___) ___-__-__'
          onChange={(e) => setBookingNumber(e.target.value)}
        />

        <ErrorMessage errors={errors} name='mobileNumber' />

        <select {...register("Adults")} onChange={e => setBookingAdults(e.target.value)}>
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
        <select {...register("Children")} onChange={e => setBookingChildren(e.target.value)}>
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
          {...register("Comment", { min: 0, max: 320 })}
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
        <button className={styles.customer__form_submit} type='submit'>
          Забронировать
        </button>
      </form>
    </div>
  );
};
