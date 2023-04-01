export const toBarselonaPark = (
  reservation: any,
  apartmentName: number | undefined,
) => {
  return {
    from: "Barselona_park@mail.ru",
    to: ["the_bi_zi@mail.ru"],
    subject: `Бронирование подтверждено`,
    html: `
		<div style='padding: 10px; max-width: 100%; color: #000;'>
			<img style="max-width: 80%;" src="https://i.postimg.cc/6p4BXfbN/Barselona-Park-Logo3-1.png" alt="1"/>
			<h2 style='font-size:20px;font-weight:700;margin-top:0'>Бронирование апартамента ${apartmentName} подтверждено</h2>
		
			<div>
				Краткая информация о бронировании 
				<p style='font-weight: 700;'>
					Сделано в:<span style='font-weight:400'> ${[
            reservation.createdAt.getHours(),
            reservation.createdAt.getMinutes(),
          ]
            .map((x) => (x < 10 ? "0" + x : x))
            .join(":")} - ${reservation.createdAt.toLocaleDateString()}</span>
				</p>
				<p style='font-weight: 700;'>
					ФИО:<span style='font-weight:400'> ${reservation.fullName}</span>
				</p>
				<p style='font-weight: 700;'>
					Email:<span style='font-weight:400'> ${reservation.email}</span>
				</p>
				<p style='font-weight: 700;'>
					Телефон:<span style='font-weight:400'> ${reservation.phoneNumber}</span>
				</p>
			</div>
	
  			<a href="http://localhost:3500/Booking/Cancel/${apartmentName}/${reservation.token}" style="display: inline-block; width: 30%; height: auto; padding: 10px; background-color: #dc3545; color: #ffffff; text-align: center; text-decoration: none; border-radius: 15px; border: 2px solid white;">Отменить бронирование</a>
      </div>`,
  };
};

export const toUser = (reservation: any,  apartmentName: number | undefined) => {
  return {
    from: "Barselona_park@mail.ru",
    to: ["the_bi_zi@mail.ru"],
    subject: "Бронирование подтверждено",
    html: `
		<div style='padding: 10px; max-width: 100%; color: #000;'>
			<img style="max-width: 80%;" src="https://i.postimg.cc/6p4BXfbN/Barselona-Park-Logo3-1.png" alt="1"/>
			<h2 style='font-size:20px;font-weight:700;margin-top:0'>Бронирование апартамента ${apartmentName} подтверждено</h2>
	
			<div>
				Краткая информация о бронировании 
				<p style='font-weight: 700;'>
					Сделано в:<span style='font-weight:400'> ${[
						reservation.createdAt.getHours(),
						reservation.createdAt.getMinutes(),
					]
						.map((x) => (x < 10 ? "0" + x : x))
						.join(":")} - ${reservation.createdAt.toLocaleDateString()}</span>
				</p>
				<p style='font-weight: 700;'>
					ФИО:<span style='font-weight:400'> ${reservation.fullName}</span>
				</p>
				<p style='font-weight: 700;'>
					Email:<span style='font-weight:400'> ${reservation.email}</span>
				</p>
				<p style='font-weight: 700;'>
					Телефон:<span style='font-weight:400'> ${reservation.phoneNumber}</span>
				</p>
			</div>

				<a href="http://localhost:3500/Booking/Cancel/${apartmentName}/${reservation.token}" style="display: inline-block; width: 30%; height: auto; padding: 10px; background-color: #dc3545; color: #ffffff; text-align: center; text-decoration: none; border-radius: 15px; border: 2px solid white;">Отменить бронирование</a>
		</div>`,
  };
};