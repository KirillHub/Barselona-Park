import { toBarselonaPark, toUser } from "./messages";

import { transporter } from "../transporter";

export const sendConfirmationMessages = (reservation: any, apartmentName: number | undefined) => {

  transporter.sendMail(toBarselonaPark(reservation, apartmentName), (error, info) => {
    if (error) {
      console.log("Ошибка при отправке сообщения администратору (подтвердил):", error);
    } else {
      console.log("Сообщение администратору отправлено (подтвердил):", info.response);
    }
  });

  transporter.sendMail(toUser(reservation,apartmentName), (error, info) => {
    if (error) {
      console.log("Ошибка при отправке сообщения клиенту (подтвердил):", error);
    } else {
      console.log("Сообщение клиенту отправлено (подтвердил):", info.response);
    }
  });
};
