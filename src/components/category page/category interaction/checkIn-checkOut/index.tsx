import DatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import { subDays, addDays } from 'date-fns';
import { useState, forwardRef } from 'react';
import { More } from '../../../../svg';
import 'react-datepicker/dist/react-datepicker.css';
import './style.scss';
import { reservationDays } from '../../../functions/reservationDays';

export const CheckInCheckOut = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // console.log(reservationDays(startDate, endDate));

  const ExampleCustomInput = forwardRef(({ value, onClick }: any, ref: any) => (
    <div className="check-date" onClick={onClick} ref={ref}>
      <span className="check-date-number">{value.split(' ')[0]}</span>
      <span className="check-date-date">
        {value.split(' ')[1]}{' '}
        <div className="check-date-date-more">
          <More />
        </div>
      </span>
    </div>
  ));

  return (
    <>
      <div className="checkIn">
        <p className="check-title">Заселение</p>
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          selectsStart
          locale={ru}
          minDate={subDays(new Date(), 0)}
          maxDate={addDays(new Date(), 365)}
          calendarStartDay={1}
          startDate={startDate}
          dateFormat="d MMM"
          customInput={<ExampleCustomInput />}
          endDate={endDate}
        />
      </div>
      <div className="checkIn">
        <p className="check-title">Выселение</p>
        <DatePicker
          selected={endDate}
          onChange={(date: Date) => setEndDate(date)}
          selectsEnd
          locale={ru}
          minDate={startDate}
          maxDate={addDays(new Date(), 365)}
          customInput={<ExampleCustomInput />}
          startDate={startDate}
          dateFormat="d MMM"
          calendarStartDay={1}
          endDate={endDate}
        />
      </div>
    </>
  );
};
