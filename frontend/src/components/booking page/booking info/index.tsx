import styles from "./style.module.scss";
import useStore from "@/store/useStore";

export const BookingInfo = () => {
  const bookingPrice = useStore(state => state.bookingPrice);
  const bookingDates = useStore(state => state.bookingDates);
  const startEndDates = useStore(state => state.startEndDates);
  return (
    <div className={styles.booking__details}>
      <div className={styles.bookingInfo__details}>
        <h2>Детали бронирования</h2>

        <div className={styles.booking__details_info}>
          <p>
            <span>ФИО -</span> Алексей Алексей Алексей
          </p>
          <p>
            <span>Email -</span> thebizi15@gmail.com
          </p>
          <p>
            <span>Номер телефона -</span> 8 (888) 888-88-88
          </p>
          <p>
            <span>Взрослых -</span> 2
          </p>
          <p>
            <span>Детей -</span> 0
          </p>
          <p>
            <span>Количество ночей -</span> {bookingDates.length}
          </p>
          <p>
            <span>Дата заезда -</span> {startEndDates.start}
          </p>
          <p>
            <span>Дата выезда -</span> {startEndDates.end}
          </p>
          <p>
            <span>Сумма -</span> {bookingPrice} руб
          </p>
          <p>
            <span>Ваш комментарий -</span> ыфваоыфдвлаофыжд алофыжвдаол жфыдвлао жфдывоа ждфывоа
            ждлфыоважд фыожадыфо жадлфыов аждлфывоа ждыфвоа ыждфва олыфвжда офжыда оывфждо
          </p>

          <ul>
            <span>Все выбранные даты</span>
            {bookingDates.map(date => (
              <li key={date}>{date}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
