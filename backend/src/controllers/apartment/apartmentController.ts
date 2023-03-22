import ApartmentSchema from "#/models/apartment";
import { ApartmentsType } from "../../type";
import { categoryPars } from "#/helpers/categoryParse";
import { categoryService } from "#/helpers/categoryService";
import { categorySort } from "#/helpers/categorySort";
import { findSimilarApartments } from "#/helpers/findSimilarApartments";

// import mongoose from 'mongoose';

export const getSimilar = async (req: any, res: any) => {
  try {
    const apartment: ApartmentsType[] = await ApartmentSchema.find({
      apartmentName: +req.params.apartmentName,
    });

    const similar = findSimilarApartments(apartment[0], req.params.option);

    const similarApartments = await ApartmentSchema.find({ $and: [similar] });

    const shuffle = (array: any) => {
      const newArray = [...array];
      const length = newArray.length;

      for (let start = 0; start < length; start++) {
        const randomPosition = Math.floor(
          (newArray.length - start) * Math.random()
        );
        const randomItem = newArray.splice(randomPosition, 1);

        newArray.push(...randomItem);
      }

      return newArray;
    };

    const filtredSimilar = [...similarApartments].filter(
      (apartment) => apartment.apartmentName !== +req.params.apartmentName
    );

    const shuffSimlar = shuffle(filtredSimilar);

    res.json(shuffSimlar.slice(0, 8));
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Не удалось получить все апартаменты",
    });
  }
};

export const getAllApartments = async (req: any, res: any) => {
  try {
    const category = categoryPars(req.params.category);

    if (category === undefined) return;

    const service = categoryService(req.params.service);

    const mergedObj = Object.assign({}, ...service, category);

    const apartments: any = await ApartmentSchema.find({
      $and: [mergedObj],
    });

    const cutApartments = [...apartments]
      .slice(0, req.params.quantity)
      .sort((a, b) => b.sortIndex - a.sortIndex);
    const sort =
      req.params.sort !== "undefined" ? req.params.sort : "Without-sort";

    const sortedApartments = categorySort([...cutApartments], sort);

    const readyData =
      sort === "Without-sort" ? cutApartments : sortedApartments;

    res.json({ data: readyData, length: apartments.length });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Не удалось получить все апартаменты",
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
      message: "Не удалось добавить апартаменты",
    });
  }
};
