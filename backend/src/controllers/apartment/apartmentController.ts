import ApartmentSchema from '#/models/apartment';
import { categoryPars } from '#/helpers/categoryParse';
import { categorySort } from '#/helpers/categorySort';
import { categoryService } from '#/helpers/categoryService';
import { findSimilarApartments } from '#/helpers/findSimilarApartments';
import { ApartmentsType } from '../../type';
// import mongoose from 'mongoose';

export const getSimilar = async (req: any, res: any) => {
  try {
    const apartment: ApartmentsType[] = await ApartmentSchema.find({
      apartmentName: req.params.apartmentName,
    });

    const similar = findSimilarApartments(apartment[0], req.params.option);

    const similarApartments = await ApartmentSchema.find({ $and: [similar] });

    res.json([...similarApartments].slice(0, 8));
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: 'Не удалось получить все апартаменты',
    });
  }
};

export const getAllApartments = async (req: any, res: any) => {
  try {
    const category = categoryPars(req.params.category);

    if (category === undefined) return;

    const service = categoryService(req.params.service);

    const mergedObj = Object.assign({}, ...service, category);

    console.log(mergedObj);

    const apartments: any = await ApartmentSchema.find({
      $and: [mergedObj],
    });

    const cutApartments = [...apartments];

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
