import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { ApartmentController } from '#/controllers/index';

mongoose
  .connect(`mongodb+srv://${process.env.MONGO}@barselonadb.tad5xvw.mongodb.net/barselonaPark`)
  .then(() => console.log('Mongo OK'))
  .catch((err) => console.log('Mongo Error', err));

const app = express();

app.use(express.json({ limit: '1mb' }), cors());



app.get('/:category/:sort/:service/:quantity', ApartmentController.getAllApartments);
app.post('/addNewApartment', ApartmentController.addApartments);


app.listen(process.env.PORT || 4444, () => {
  console.log('Backend OK', process.env.PORT || 4444);
});

app.on('error', (e) => console.error('Error', e));
