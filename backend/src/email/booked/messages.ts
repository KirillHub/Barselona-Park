export const toBarselonaPark = (
  reservation: any,
  apartmentName: number,
	token: string
) => {


  return {
    from: "Barselona_park@mail.ru",
    to: ["the_bi_zi@mail.ru"],
    subject: `Бронирование`,
    html: `
		<div style='padding: 10px; max-width: 100%; color: #000;'>
		<img style="max-width: 80%;" src="https://i.postimg.cc/6p4BXfbN/Barselona-Park-Logo3-1.png" alt="1"/>
		<h2 style='font-size:20px;font-weight:700;margin-top:0'>Бронирование апартамента ${apartmentName}</h2>
        <p style='margin-bottom:10px; padding:0; width:100%'>
          Произошло бронирование в ${[reservation.createdAt.getHours(), reservation.createdAt.getMinutes()]
            .map((x) => (x < 10 ? "0" + x : x))
            .join(":")} - ${reservation.createdAt.toLocaleDateString()}
        </p>
        <div >
          <p style='margin-bottom:5px;padding:0;width:100%;font-weight:700'>
            Список забронированных дней
          </p>
          <ul style='list-style-type:disc; list-style-position: inside; padding:0; margin:0; margin-left: 6px;'>
					 
					<div style="float: left; width: 48%; ">
					${reservation.dates
            .map((date: string, i: number) =>
              i < reservation.dates.length / 2 ? `<li>${date}</li>` : ""
            )
            .join("")}
				</div>
				
				<div style="float: left; width: 48%;">
					${reservation.dates
            .map((date: string, i: number) =>
              i >= reservation.dates.length / 2 ? `<li>${date}</li>` : ""
            )
            .join("")}
				</div>
          </ul>
        </div>
				
        <div style="clear: both;">
          <p style='font-weight:700; margin: 5px 0'>Указаная информация</p>
					
          <p style='font-weight: 700;'>
            ФИО:<span style='font-weight:400'> ${reservation.fullName}</span>
          </p>
          <p style='font-weight: 700;'>
            Email:<span style='font-weight:400'> ${reservation.email}</span>
          </p>
          <p style='font-weight: 700;'>
            Телефон:<span style='font-weight:400'> ${
              reservation.phoneNumber
            }</span>
          </p>
          <p style='font-weight: 700;'>
            Взрослых: <span style='font-weight:400'> ${
              reservation.numberOfPeople
            }</span>
          </p>
          <p style='font-weight: 700;'>
            Детей: <span style='font-weight:400'> ${
              reservation.numberOfChildren
            }</span>
          </p>
          <p style='font-weight: 700;'>
            Сумма к оплате: <span style='font-weight:400'> ${
              reservation.bookingPrice
            } ₽</span>
          </p>
          <p style='font-weight: 700;'>
            Комментарий:<span style='font-weight:400'> ${
              reservation.comment
            }</span>
          </p>
          <p style='font-weight: 700;'>
            Дата заезда:<span style='font-weight:400'> ${
              reservation.checkInDay
            }</span>
          </p>
          <p style='font-weight: 700;'>
            Дата выезда:<span style='font-weight:400'> ${
              reservation.checkOutDay
            }</span>
          </p>
          <p style='font-weight: 700;'>
            Апартамент ${apartmentName}:
            <a
              href="https://barselona-park.vercel.app/Apartment-${apartmentName}"
              style='font-weight: 400; color: rgb(26, 79, 255); text-decoration: underline;'
            >
              Перейти к апартаменту
            </a>
          </p>
					
					<p>Бронирование должно быть подтверждено в течении 24 часов с момента бронирования иначе оно будет автоматически отменено!</p>

					<a href="http://localhost:3500/Booking/Confirm/${apartmentName}/${token}" style="display: inline-block; width: 30%; height: auto; padding: 10px; background-color: #007bff; color: #ffffff; text-align: center; text-decoration: none; border-radius: 15px; border: 2px solid white;">Подтвердить бронирование</a>
  				<a href="http://localhost:3500/Booking/Cancel/${apartmentName}/${token}" style="display: inline-block; width: 30%; height: auto; padding: 10px; background-color: #dc3545; color: #ffffff; text-align: center; text-decoration: none; border-radius: 15px; border: 2px solid white;">Отменить бронирование</a>
        </div>
      </div>`,
  };
};

export const toUser = (
  reservation: any,
  apartmentName: number,
  token: string,
) => {
  return {
    from: "Barselona_park@mail.ru",
    to: ["the_bi_zi@mail.ru"],
    subject: "Информация о вашем бронировании",
    html: `<div style='padding: 10px; max-width: 100%; color: #000;'>
		<img style="max-width: 80%;" src="https://i.postimg.cc/6p4BXfbN/Barselona-Park-Logo3-1.png" alt="1"/>
        <h2 style='font-size:20px;font-weight:700;margin-top:0'>Бронирование апартамента ${apartmentName}</h2>
				
        <p style='margin-bottom:10px;padding:0; width:100%'>
          Вы произвели бронирование в ${[reservation.createdAt.getHours(), reservation.createdAt.getMinutes()]
            .map((x) => (x < 10 ? "0" + x : x))
            .join(":")} - ${reservation.createdAt.toLocaleDateString()}
        </p>
        <div >
          <p style='margin-bottom:5px;padding:0;width:100%;font-weight:700'>
            Список забронированных дней
          </p>
          <ul style='list-style-type:disc; list-style-position: inside; padding:0; margin:0; margin-left: 6px;'>
					 
					<div style="float: left; width: 48%; ">
						${reservation.dates
              .map((date: string, i: number) =>
                i < reservation.dates.length / 2 ? `<li>${date}</li>` : ""
              )
              .join("")}
					</div>
					
					<div style="float: left; width: 48%;">
						${reservation.dates
              .map((date: string, i: number) =>
                i >= reservation.dates.length / 2 ? `<li>${date}</li>` : ""
              )
              .join("")}
					</div>
          </ul>
        </div>
				
        <div style='clear: both;'>
          <p style='font-weight:700;margin-bottom:5px'>Указаная информация</p>
					
          <p style='font-weight: 700;'>
            ФИО:<span style='font-weight:400'> ${reservation.fullName}</span>
          </p>
          <p style='font-weight: 700;'>
            Email:<span style='font-weight:400'> ${reservation.email}</span>
          </p>
          <p style='font-weight: 700;'>
            Телефон:<span style='font-weight:400'> ${
              reservation.phoneNumber
            }</span>
          </p>
          <p style='font-weight: 700;'>
            Взрослых: <span style='font-weight:400'> ${
              reservation.numberOfPeople
            }</span>
          </p>
          <p style='font-weight: 700;'>
            Детей: <span style='font-weight:400'> ${
              reservation.numberOfChildren
            }</span>
          </p>
          <p style='font-weight: 700;'>
            Сумма к оплате: <span style='font-weight:400'> ${
              reservation.bookingPrice
            } ₽</span>
          </p>
          <p style='font-weight: 700;'>
            Комментарий:<span style='font-weight:400'> ${
              reservation.comment
            }</span>
          </p>
          <p style='font-weight: 700;'>
            Дата заезда:<span style='font-weight:400'> ${
              reservation.checkInDay
            }</span>
          </p>
          <p style='font-weight: 700;'>
            Дата выезда:<span style='font-weight:400'> ${
              reservation.checkOutDay
            }</span>
          </p>
          <p style='font-weight: 700;'>
            Апартамент ${apartmentName}: 
            <a
              href="https://barselona-park.vercel.app/Apartment-${apartmentName}"
              style='font-weight: 400; color: rgb(26, 79, 255); text-decoration: underline;'
            >
              Перейти к апартаменту
            </a>
          </p>

					<p>Бронирование должно быть подтверждено в течении 24 часов с момента бронирования иначе оно будет автоматически отменено!</p>

					<a href="http://localhost:3500/Booking/Confirm/${apartmentName}/${token}" style="display: inline-block; width: 30%; height: auto; padding: 10px; background-color: #007bff; color: #ffffff; text-align: center; text-decoration: none; border-radius: 15px; border: 2px solid white;">Подтвердить бронирование</a>
  				<a href="http://localhost:3500/Booking/Cancel/${apartmentName}/${token}" style="display: inline-block; width: 30%; height: auto; padding: 10px; background-color: #dc3545; color: #ffffff; text-align: center; text-decoration: none; border-radius: 15px; border: 2px solid white;">Отменить бронирование</a>
        </div>
      </div>`,
  };
};
