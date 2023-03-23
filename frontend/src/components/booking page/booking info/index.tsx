import styles from "./style.module.scss";

export const BookingInfo = () => {
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
            <span>Количество ночей -</span> 12
          </p>
          <p>
            <span>Дата заезда -</span> 29 марта 2023
          </p>
          <p>
            <span>Дата выезда -</span> 29 марта 2023
          </p>
          <p>
            <span>Сумма -</span> 220000 руб
          </p>
          <p>
            <span>Ваш комментарий -</span> ыфваоыфдвлаофыжд алофыжвдаол жфыдвлао
            жфдывоа ждфывоа ждлфыоважд фыожадыфо жадлфыов аждлфывоа ждыфвоа
            ыждфва олыфвжда офжыда оывфждо
          </p>

          <ul>
            <span>Все выбранные даты</span>
            <li>29 Марта 2023</li>
            <li>30 Марта 2023</li>
            <li>31 Марта 2023</li>
            <li>1 Апреля 2023</li>
            <li>2 Апреля 2023</li>
            <li>3 Апреля 2023</li>
            <li>4 Апреля 2023</li>
            <li>5 Апреля 2023</li>
            <li>6 Апреля 2023</li>
            <li>7 Апреля 2023</li>
            <li>8 Апреля 2023</li>
            <li>9 Апреля 2023</li>
            <li>10 Апреля 2023</li>
            <li>11 Апреля 2023</li>
            <li>12 Апреля 2023</li>
            <li>13 Апреля 2023</li>
            <li>14 Апреля 2023</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
