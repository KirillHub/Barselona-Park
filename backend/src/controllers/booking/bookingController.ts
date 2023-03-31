import BookingSchema from "#/models/booking";
import cron from "node-cron";
import crypto from "crypto";
import { sendBookedMessages } from "#/email/booked/booked";
import { sendCanceledMessages } from "#/email/canceled/canceled";
import { sendConfirmationMessages } from "#/email/confirmation/confirmation";

export const addBookingApartment = async (req: any, res: any) => {
  try {
    const booking = new BookingSchema({
      apartmentName: req.body.apartmentName,
      sortIndex: req.body.sortIndex,
      reservations: [],
    });

    const createBookingApartment = await booking.save();
    res.json(createBookingApartment);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err,
    });
  }
};

const cancelUnconfirmedBookings = async () => {
  try {
    const allBookings = await BookingSchema.find({});

    allBookings.forEach(async (apartment) => {
      const updatedReservations = apartment.reservations.map(
        (reservation: any) => {
          if (
            !reservation.confirmed &&
            new Date(reservation.createdAt) <
              new Date(Date.now() - 24 * 60 * 60 * 1000)
          ) {
            reservation.canceled = true;
          }
          return reservation;
        }
      );

      await BookingSchema.updateOne(
        { _id: apartment._id },
        { $set: { reservations: updatedReservations } }
      );
    });
  } catch (err) {
    console.error(err);
  }
};
// Запустите задачу каждый час
cron.schedule("0 * * * *", cancelUnconfirmedBookings);

export const confirmBooking = async (req: any, res: any) => {
  try {
    const booking = await BookingSchema.findOne({
      reservations: {
        $elemMatch: {
          token: req.params.token,
          createdAt: {
            $gte: new Date(Date.now() - 24 * 60 * 60 * 1000),
          },
        },
      },
    });

    if (!booking) {
      return res
        .status(404)
        .send(
          "<h1 style='text-align: center; font-size: calc(20px + 20 * (100vw / 1920))'>Бронирование не найдено</h1>"
        );
    }

    const reservationIndex = booking.reservations.findIndex(
      (reservation) => reservation.token === req.params.token
    );

    const reservation = booking.reservations[reservationIndex];

    if (reservation.confirmed) {
      return res
        .status(400)
        .send(
          "<h1 style='text-align: center; font-size: calc(20px + 20 * (100vw / 1920))'>Вы уже подтвердили свое бронирование</h1>"
        );
    }

    if (new Date(reservation.createdAt) >= new Date(Date.now() - 30 * 1000)) {
      return res
        .status(400)
        .send(
          "<h1 style='text-align: center; font-size: calc(20px + 20 * (100vw / 1920))'>Пожалуйста, подождите немного перед подтверждением бронирования</h1>"
        );
    }

    reservation.confirmed = true;
    await booking.save();

    sendConfirmationMessages(reservation, booking.apartmentName);

    res.send(
      "<h1 style='text-align: center; font-size: calc(20px + 20 * (100vw / 1920))'>Бронирование подтверждено</h1>"
    );
  } catch (error) {
    res.status(500).json({ message: "Ошибка сервера", error });
  }
};

export const cancelBooking = async (req: any, res: any) => {
  try {
    const booking = await BookingSchema.findOne({
      reservations: {
        $elemMatch: {
          token: req.params.token,
          createdAt: {
            $gte: new Date(Date.now() - 24 * 60 * 60 * 1000),
          },
        },
      },
    });

    if (!booking) {
      return res
        .status(404)
        .send(
          "<h1 style='text-align: center; font-size: calc(20px + 20 * (100vw / 1920))'>Бронирование не найдено</h1>"
        );
    }

    const reservationIndex = booking.reservations.findIndex(
      (reservation) => reservation.token === req.params.token
    );

    const reservation = booking.reservations[reservationIndex];

    if (reservation.canceled) {
      return res
        .status(400)
        .send(
          "<h1 style='text-align: center; font-size: calc(20px + 20 * (100vw / 1920))'>Бронирование уже отменено</h1>"
        );
    }

    if (new Date(reservation.createdAt) >= new Date(Date.now() - 30 * 1000)) {
      return res
        .status(400)
        .send(
          "<h1 style='text-align: center; font-size: calc(20px + 20 * (100vw / 1920))'>Пожалуйста, подождите немного перед отменой бронирования</h1>"
        );
    }

    reservation.canceled = true;
    await booking.save();

    sendCanceledMessages(reservation, booking.apartmentName);

    res.send(
      "<h1 style='text-align: center; font-size: calc(20px + 20 * (100vw / 1920))'>Бронирование отменено</h1>"
    );
  } catch (error) {
    res.status(500).json({ message: "Ошибка сервера", error });
  }
};

export const patchBooking = async (req: any, res: any) => {
  try {
    const token = crypto.randomBytes(32).toString("hex");
    const data = { ...req.body, token };

    const apartment = await BookingSchema.updateOne(
      {
        apartmentName: req.params.apartmentName,
      },
      {
        $push: {
          reservations: data,
        },
      }
    );

    const booking = await BookingSchema.findOne({
      reservations: {
        $elemMatch: {
          token: token,
        },
      },
    });

    if (!booking) {
      return res.status(404).json({ message: "Бронирование не найдено" });
    }

    const reservationIndex = booking.reservations.findIndex(
      (reservation) => reservation.token === token
    );

    const reservation = booking.reservations[reservationIndex];

    sendBookedMessages(reservation, req.params.apartmentName, token);

    res.json({ message: "Бронирование успешно создано" });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: err,
    });
  }
};

export const getExcludedDates = async (req: any, res: any) => {
  try {
    const apartmentDates = await BookingSchema.findOne({
      apartmentName: req.params.apartmentName,
    });

    const readyDates = apartmentDates?.reservations.map((x) => x.dates);

    res.json(readyDates?.flat());
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: err,
    });
  }
};
