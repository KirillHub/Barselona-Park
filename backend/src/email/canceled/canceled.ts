import { toBarselonaPark, toUser } from "./messages";

import { transporter } from "../transporter";

export const sendCanceledMessages = (reservation: any, apartmentName: number | undefined) => {

  transporter.sendMail(toBarselonaPark(reservation, apartmentName), (error, info) => {
    if (error) {
      console.log("Ошибка при отправке сообщения администратору (отмена):", error);
    } else {
      console.log("Сообщение администратору отправлено (отмена):", info.response);
    }
  });

  transporter.sendMail(toUser(reservation,apartmentName), (error, info) => {
    if (error) {
      console.log("Ошибка при отправке сообщения клиенту (отмена):", error);
    } else {
      console.log("Сообщение клиенту отправлено (отмена):", info.response);
    }
  });
};
