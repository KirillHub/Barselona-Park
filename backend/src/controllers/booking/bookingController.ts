import BookingSchema from "#/models/booking";

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

export const patchBooking = async (req: any, res: any) => {
  try {
    const apartment = await BookingSchema.updateOne(
      {
        apartmentName: req.params.apartmentName,
      },
      { $push: { reservations: req.body } }
    );

    // res.json(createBookingApartment);
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
