import { toBarselonaPark, toUser } from "./messages";

import { transporter } from "../transporter";

export const sendBookedMessages = (
  bookedInfo: any,
  apartmentName: number,
  token: string
) => {
	transporter.sendMail(toBarselonaPark(bookedInfo, apartmentName, token), (error, info) => {
    if (error) {
      console.log("Ошибка при отправке сообщения администратору (бронь):", error);
    } else {
      console.log("Сообщение администратору отправлено (бронь):", info.response);
    }
  });

	transporter.sendMail(toUser(bookedInfo, apartmentName, token), (error, info) => {
    if (error) {
      console.log("Ошибка при отправке сообщения клиенту (бронь):", error);
    } else {
      console.log("Сообщение клиенту отправлено (бронь):", info.response);
    }
  });

};
