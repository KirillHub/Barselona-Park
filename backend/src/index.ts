import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

// import {

// } from './controllers/index.js';

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO}@cluster0.g2dffl4.mongodb.net/blog?retryWrites=true&w=majority`,
  )
  .then(() => console.log('DB ok'))
  .catch((err) => console.log('DB error', err) );


const app = express();

app.use(express.json({ limit: '1mb' }), cors());

app.listen(process.env.PORT || 4444, () => {
  console.log('Server OK');
});

app.on('error', (e) => console.error('Error', e));
