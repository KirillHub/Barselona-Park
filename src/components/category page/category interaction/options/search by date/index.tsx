import { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { subDays, addDays } from 'date-fns';
import ru from 'date-fns/locale/ru';
import { reservationDays } from '../../../../functions/reservationDays';
import { More } from '../../../../../svg';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../style.module.scss';

interface Custom {
  value: string;
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
}
export type Ref = HTMLDivElement;

export const CheckInCheckOut = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // console.log(reservationDays(startDate, endDate));

  if (startDate.getTime() > endDate.getTime()) {
    setEndDate(startDate);
  }

  const excludedDates = ['Fri Feb 17 2023', 'Sat Feb 18 2023'].map((x) => new Date(x));

  const CustomInput = forwardRef<Ref, Custom>(({ value, onClick }, ref) => (
    <div className={styles.boxDate} onClick={onClick} ref={ref}>
      <span className={styles.boxDateNumber}>{value.split(' ')[0]}</span>
      <span className={styles.boxDateTitle}>
        {value.split(' ')[1]}
        <div className={styles.optionsIcon}>
          <More />
        </div>
      </span>
    </div>
  ));

  CustomInput.displayName = 'MyApp';

  return (
    <>
      <div className={styles.box}>
        <p className={styles.boxTitle}>Заселение</p>
        <DatePicker
          selectsStart
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          locale={ru}
          calendarStartDay={1}
          dateFormat="d MMM"
          excludeDates={excludedDates}
          minDate={subDays(new Date(), 0)}
          maxDate={addDays(new Date(), 365)}
          onChange={(date: Date) => setStartDate(date)}
          customInput={<CustomInput value={''} onClick={undefined} />}
        />
      </div>

      <div className={styles.box}>
        <p className={styles.boxTitle}>Выселение</p>
        <DatePicker
          selectsEnd
          selected={endDate}
          startDate={startDate}
          endDate={endDate}
          locale={ru}
          calendarStartDay={1}
          dateFormat="d MMM"
          excludeDates={excludedDates}
          minDate={startDate}
          maxDate={addDays(new Date(), 365)}
          onChange={(date: Date) => setEndDate(date)}
          customInput={<CustomInput value={''} onClick={undefined} />}
        />
      </div>
    </>
  );
};



export default CheckInCheckOut;
