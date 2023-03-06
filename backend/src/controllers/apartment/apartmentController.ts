import ApartmentSchema from '../../models/apartment.js';

// import mongoose from 'mongoose';

export const getAllApartments = async (req: any, res: any) => {
  try {
    const apartments = await ApartmentSchema.find().populate('_id').exec();
    console.log('lets go');
    res.json(apartments);
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: 'Не удалось получить все апартаменты',
    });
  }
};

export const addApartments = async (req: any, res: any) => {
  try {


    const apartments = new ApartmentSchema({
      apartmentName: req.body.apartment,
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
