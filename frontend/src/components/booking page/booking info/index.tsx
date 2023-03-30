import styles from "./style.module.scss";
import useStore from "@/store/useStore";

export const BookingInfo = () => {
  const bookingPrice = useStore(state => state.bookingPrice);
  const bookingDates = useStore(state => state.bookingDates);
  const startEndDates = useStore(state => state.startEndDates);
  const bookingFullName = useStore(state => state.bookingFullName);
  const bookingEmail = useStore(state => state.bookingEmail);
  const bookingNumber = useStore(state => state.bookingNumber);
  const bookingAdults = useStore(state => state.bookingAdults);
  const bookingChildren = useStore(state => state.bookingChildren);
  const bookingComment = useStore(state => state.bookingComment);

  return (
    <>
      <div className={styles.booking__details}>
        <div className={styles.bookingInfo__details}>
          <h2>Детали бронирования</h2>

          <div className={styles.booking__details_info}>
            <p>
              <span>ФИО -</span> {bookingFullName}
            </p>
            <p>
              <span>Email -</span> {bookingEmail}
            </p>
            <p>
              <span>Номер телефона -</span> {bookingNumber}
            </p>
            <p>
              <span>Взрослых -</span> {bookingAdults}
            </p>
            <p>
              <span>Детей -</span> {bookingChildren}
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
              <span>Ваш комментарий -</span> {bookingComment}
            </p>

            <ul>
              <p>Все выбранные даты</p>
              {bookingDates.length > 0 ? (
                bookingDates.map(date => <li key={date}>{date}</li>)
              ) : (
                <li>Нет выбранных дат</li>
              )}
            </ul>
          </div>
        </div>
      </div>

      
    </>
  );
};
