import BookingSchema from "#/models/booking";
import cron from "node-cron";
import crypto from "crypto";
import { sendReservationInfo } from "#/helpers/createEmailMessage";

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
    const unconfirmedBookings = await BookingSchema.aggregate([
      {
        $addFields: {
          reservations: {
            $filter: {
              input: "$reservations",
              as: "reservation",
              cond: {
                $and: [
                  { $eq: ["$$reservation.confirmed", false] },
                  {
                    $lt: [
                      "$$reservation.createdAt",
                      new Date(Date.now() - 24 * 60 * 60 * 1000),
                    ],
                  },
                ],
              },
            },
          },
        },
      },
      { $match: { reservations: { $ne: [] } } },
    ]);

    unconfirmedBookings.forEach(async (apartment) => {
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
    const { apartmentName, token } = req.params;
    const apartment = await BookingSchema.findOne({ apartmentName });

    if (!apartment) {
      res.status(404).json({ message: "Апартаменты не найдены" });
      return;
    }

    const reservationIndex = apartment.reservations.findIndex(
      (reservation) => reservation.token === token
    );
    const reservation = apartment.reservations[reservationIndex];

    if (reservationIndex === -1) {
      res.status(404).json({ message: "Бронирование не найдено" });
      return;
    }

    if (reservation.canceled) {
      res.status(400).json({ message: "Бронирование уже отменено" });
      return;
    }

    apartment.reservations[reservationIndex].confirmed = true;
    await apartment.save();

    res.json({ message: "Бронирование успешно подтверждено" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};
export const patchBooking = async (req: any, res: any) => {
  try {
    const token = crypto.randomBytes(32).toString("hex");
    const reservation = { ...req.body, token };

    const apartment = await BookingSchema.updateOne(
      {
        apartmentName: req.params.apartmentName,
      },
      {
        $push: {
          reservations: reservation,
        },
      }
    );

    sendReservationInfo(reservation, req.params.apartmentName, token);

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
