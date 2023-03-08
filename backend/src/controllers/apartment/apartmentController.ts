import ApartmentSchema from '../../models/apartment.js';
import { categoryPars } from '../../helpers/categoryParse.js';
// import mongoose from 'mongoose';

export const getAllApartments = async (req: any, res: any) => {
  try {
    const category = categoryPars(req.params.category);

    console.log(category);

    const a = {
      'about.floor': { $gt: '0' },
    };

    if (category !== undefined) {
      const apartments = await ApartmentSchema.find(category).limit(6);
      res.json(apartments);
    }
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: 'Не удалось получить все апартаменты',
    });
  }
};

export const addApartments = async (req: any, res: any) => {
  try {
    console.log('add');
    const apartments = new ApartmentSchema({
      apartmentName: req.body.apartmentName,
      summerPrice: req.body.summerPrice,
      winterPrice: req.body.winterPrice,
      sortIndex: req.body.sort,

      about: req.body.about,

      images: req.body.images,

      services: req.body.services,

      meta: req.body.meta,
    });

    const createApartments = await apartments.save();

    res.json(createApartments);
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: 'Не удалось добавить апартаменты',
    });
  }
};
