import "react-datepicker/dist/react-datepicker.css";

import { addDays, subDays } from "date-fns";
import { forwardRef, useEffect, useState } from "react";

import DatePicker from "react-datepicker";
import { More } from "../../../../../../svg";
import { reservationDays } from "../../../../../../helpers/functions/reservationDays";
import ru from "date-fns/locale/ru";
import secondStyles from "../../style.module.scss";
import styles from "../style.module.scss";
import useStore from "../../../../../../store/useStore";

interface Custom {
  value: string;
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
}
export type Ref = HTMLDivElement;

export const CheckInCheckOut = () => {
  const setNights = useStore(state => state.setNights);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  if (startDate.getTime() > endDate.getTime()) {
    setEndDate(startDate);
  }

  const dateLength = (start: Date, end: Date) => {
    const dates = reservationDays(start, end);
    setNights(dates!?.length);
  };

  const excludedDates = ["", ""].map(x => new Date(x));

  const [isOpen, setIsOpen] = useState(false);
  const handleChange = () => {
    setIsOpen(!isOpen);
  };

  const CustomInput = forwardRef<Ref, Custom>(({ value, onClick }, ref) => (
    <div className={styles.box__content} onClick={onClick} ref={ref}>
      <span className={styles.box__span}>{value.split(" ")[0]}</span>
      <div className={styles.box__date}>
        {value.split(" ")[1]}
        <div className={secondStyles.options__icon}>
          <More />
        </div>
      </div>
    </div>
  ));

  CustomInput.displayName = "MyApp";

  useEffect(() => {
    dateLength(startDate, endDate);
  }, [startDate, endDate]);

  return (
    <>
      <div className={styles.box}>
        <p className={styles.box__title}>Заселение</p>
        <DatePicker
          selectsStart
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          locale={ru}
          calendarStartDay={1}
          dateFormat='d MMM'
          excludeDates={excludedDates}
          minDate={subDays(new Date(), 0)}
          maxDate={addDays(new Date(), 365)}
          onChange={(date: Date) => setStartDate(date)}
          customInput={<CustomInput value={""} onClick={undefined} />}
        />
      </div>

      <div className={styles.box}>
        <p className={styles.box__title}>Выселение</p>
        <DatePicker
          selectsEnd
          selected={endDate}
          startDate={startDate}
          endDate={endDate}
          locale={ru}
          calendarStartDay={1}
          dateFormat='d MMM'
          excludeDates={excludedDates}
          minDate={startDate}
          maxDate={addDays(new Date(), 365)}
          onChange={(date: Date) => setEndDate(date)}
          customInput={<CustomInput value={""} onClick={undefined} />}
        />
      </div>
    </>
  );
};

export default CheckInCheckOut;
