import nodemailer from "nodemailer";

export const sendReservationInfo = (
  reservationInfo: any,
  apartmentName: any,
	token: any
) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true,
    auth: {
      user: "Barselona_park@mail.ru",
      pass: process.env.NODEMAILER,
    },
  });

  const halfOfDatesLength = reservationInfo.dates.length / 2;

  const apartmentLink = `https://barselona-park.vercel.app/Apartment-${apartmentName}`;
	
	
  const date = new Date();

  // Создание сообщения
  const message = {
    from: "Barselona_park@mail.ru",
    to: ["thebizi15@gmail.com", "the_bi_zi@mail.ru"],
    subject: "Информация о вашем бронировании",
    html: `
		<div style='padding: 10px; max-width: 100%; color: #000;'>
		<img style="max-width: 80%;" src="https://i.postimg.cc/6p4BXfbN/Barselona-Park-Logo3-1.png" alt="1"/>
        <h2 style='font-size:20px;font-weight:700;margin-top:0'>Бронирование апартамента ${apartmentName}</h2>
				<a href="http://localhost:3500/Booking/Confirm/${apartmentName}/${token}">Подтвердить бронирование</a>
				
        <p style='margin-bottom:10px;padding:0; width:100%'>
          Вы произвели бронирование в ${[date.getHours(), date.getMinutes()]
            .map((x) => (x < 10 ? "0" + x : x))
            .join(":")} - ${date.toLocaleDateString()}
        </p>
        <div >
          <p style='margin-bottom:5px;padding:0;width:100%;font-weight:700'>
            Список забронированных дней
          </p>
          <ul style='list-style-type:disc; list-style-position: inside; padding:0; margin:0; margin-left: 6px;'>
					 
					<div style="float: left; width: 48%; ">
						${reservationInfo.dates.map((date: string, i: number) =>
              i < halfOfDatesLength ? `<li>${date}</li>` : ""
            ).join('')}
					</div>
					
					<div style="float: left; width: 48%;">
						${reservationInfo.dates.map((date: string, i: number) =>
              i > halfOfDatesLength ? `<li>${date}</li>` : ""
            ).join('')}
					</div>
          </ul>
					
          <p style='margin: 5px 0; padding: 0px; width: 100%; font-weight: 700; clear: both;'>
            Отменить бронирование
          </p>
        </div>
        <div>
          <p style='font-weight:700;margin-bottom:10px'>Указаная информация</p>
					
          <p style='font-weight: 700;'>
            ФИО:<span style='font-weight:400'>${reservationInfo.fullName}</span>
          </p>
          <p style='font-weight: 700;'>
            Email:<span style='font-weight:400'>${reservationInfo.email}</span>
          </p>
          <p style='font-weight: 700;'>
            Телефон:<span style='font-weight:400'>${
              reservationInfo.phoneNumber
            }</span>
          </p>
          <p style='font-weight: 700;'>
            Взрослых: <span style='font-weight:400'>${
              reservationInfo.numberOfPeople
            }</span>
          </p>
          <p style='font-weight: 700;'>
            Детей: <span style='font-weight:400'>${
              reservationInfo.numberOfChildren
            }</span>
          </p>
          <p style='font-weight: 700;'>
            Сумма к оплате: <span style='font-weight:400'>${
              reservationInfo.bookingPrice
            } ₽</span>
          </p>
          <p style='font-weight: 700;'>
            Комментарий:<span style='font-weight:400'>${
              reservationInfo.comment
            }</span>
          </p>
          <p style='font-weight: 700;'>
            Дата заезда:<span style='font-weight:400'>${
              reservationInfo.checkInDay
            }</span>
          </p>
          <p style='font-weight: 700;'>
            Дата выезда:<span style='font-weight: 400;'>${
              reservationInfo.checkOutDay
            }</span>
          </p>
          <p style='font-weight: 700;'>
            Апартамент ${apartmentName}:
            <a
              href="${apartmentLink}"
              style='font-weight: 400; color: rgb(26, 79, 255); text-decoration: underline;'
            >
              Перейти к апартаменту
            </a>
          </p>
        </div>
      </div>`,
  };

  // отправка сообщения
  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log("Ошибка при отправке сообщения:", error);
    } else {
      console.log("Сообщение отправлено:", info.response);
    }
  });
};
