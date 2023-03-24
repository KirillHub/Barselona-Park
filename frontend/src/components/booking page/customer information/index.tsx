"use client";

import "./style.scss";
import "react-datepicker/dist/react-datepicker.css";

import { addDays, subDays } from "date-fns";
import { forwardRef, useState } from "react";

import DatePicker from "react-datepicker";
import { reservationDays } from "../../../helpers/functions/reservationDays";
import ru from "date-fns/locale/ru";
import styles from "./style.module.scss";
import { useForm } from "react-hook-form";

export const CustomerInformation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const StartCustomDate = forwardRef(({ value, onClick }: any, ref) => (
    <input type='text' value={value!?.length > 0 ? `C ${value}` : "Выберите дату заезда"} readOnly />
  ));

  const EndCustomDate = forwardRef(({ value, onClick }: any, ref) => (
    <input type='text' value={value!?.length > 0 ? `По ${value}` : "Выберите дату выезда"} readOnly />
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
          {...register("Full name", { required: true, min: 2, maxLength: 90 })}
        />
        <input
          type='text'
          placeholder='Email'
          {...register("Email", {
            required: true,
            min: 2,
            pattern: /^\S+@\S+$/i,
          })}
        />
        <input
          type='tel'
          placeholder='Номер телефона'
          {...register("Mobile number", {
            required: true,
            min: 2,
            maxLength: 12,
          })}
        />

        <select {...register("Adults")}>
          <option value='Взрослых' selected disabled>
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
        <select {...register("Children")}>
          <option value='Взрослых' selected disabled>
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
