import ApartmentSchema from '#/models/apartment';
import { categoryPars } from '#/helpers/categoryParse';
import { categorySort } from '#/helpers/categorySort';
import { categoryService } from '#/helpers/service';
// import mongoose from 'mongoose';

export const getAllApartments = async (req: any, res: any) => {
  try {
    const category = categoryPars(req.params.category);

    console.log('get ' + req.params.category);

    if (category === undefined) return;

    const service = categoryService(req.params.service);

    const mergedObj = Object.assign({}, ...service, category);

    const apartments: any = await ApartmentSchema.find({
      $and: [mergedObj],
    }).sort({ apartmentName: 1 });



    const cutApartments = [...apartments].slice(0, req.params.quantity);

    const sort = req.params.sort !== 'undefined' ? req.params.sort : 'Without-sort';

    const sortedApartments = categorySort([...cutApartments], sort);

    const readyData = sort === 'Without-sort' ? cutApartments : sortedApartments;

    res.json({ data: readyData, length: apartments.length });
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
