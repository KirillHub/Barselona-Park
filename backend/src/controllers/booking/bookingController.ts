import BookingSchema from "#/models/booking";

export const addBookingApartment = async (req: any, res: any) => {
  try {
    const booking = new BookingSchema({
      apartmentName: req.body.apartmentName,

      sortIndex: req.body.sort,

      reservations: [],
    });
    
console.log(1)
    
    const createBookingApartment = await booking.save();

    res.json(createBookingApartment);
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Не удалось добавить апартаменты",
    });
  }
};
