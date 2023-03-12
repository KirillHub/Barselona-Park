import ApartmentSchema from '../../models/apartment.js';
import { categoryPars } from '../../helpers/categoryParse.js';
import { categorySort } from '../../helpers/categorySort.js';
import { categoryService } from '../../helpers/service.js';
export const getAllApartments = async (req, res) => {
    try {
        const category = categoryPars(req.params.category);
        console.log('get ' + req.params.category);
        if (category === undefined)
            return;
        const service = categoryService(req.params.service);
        const mergedObj = Object.assign({}, ...service, category);
        const apartments = await ApartmentSchema.find({
            $and: [mergedObj],
        });
        const cutApartments = [...apartments].slice(0, req.params.quantity);
        const sort = req.params.sort !== 'undefined' ? req.params.sort : 'Without-sort';
        const sortedApartments = categorySort([...cutApartments], sort);
        const readyData = sort === 'Without-sort' ? cutApartments : sortedApartments;
        res.json({ data: readyData, length: apartments.length });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось получить все апартаменты',
        });
    }
};
export const addApartments = async (req, res) => {
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
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось добавить апартаменты',
        });
    }
};
//# sourceMappingURL=apartmentController.js.map