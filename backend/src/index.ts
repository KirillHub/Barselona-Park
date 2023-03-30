import 'dotenv/config';

import { ApartmentController } from '#/controllers/index';
import { BookingController } from '#/controllers/index'
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

mongoose
  .connect(`mongodb+srv://${process.env.MONGO}@barselonadb.tad5xvw.mongodb.net/barselonaPark`)
  .then(() => console.log('Mongo OK'))
  .catch((err) => console.log('Mongo Error', err));

const app = express();

app.use(express.json({ limit: '1mb' }), cors());


app.post('/Booking/addBookingApartment', BookingController.addBookingApartment)
app.patch('/Booking/BookApartment/:apartmentName', BookingController.patchBooking)
app.get('/Booking/GetExcludedDates/:apartmentName', BookingController.getExcludedDates)

app.get('/Booking/Confirm/:apartmentName/:reservationId', BookingController.confirmBooking);

app.get(`/GetSimilar/:apartmentName/:option`, ApartmentController.getSimilar);

app.get('/Category/:category/:sort/:service/:quantity', ApartmentController.getAllApartments);
app.post('/AddNewApartment', ApartmentController.addApartments);




app.listen(process.env.PORT || 4444, () => {
  console.log('Backend OK', process.env.PORT || 4444);
});

app.on('error', (e) => console.error('Error', e));
