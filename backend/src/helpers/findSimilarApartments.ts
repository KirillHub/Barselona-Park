import { ApartmentsType } from '../type';
import { categoryService } from './categoryService';

export const findSimilarApartments = (apartment: ApartmentsType, option: string) => {
  let field = {};

  if (option === 'floor') {
    field = { 'about.floor': { $gt: apartment?.about?.floor - 3, $lt: apartment?.about?.floor + 3 } };
  }
  if (option === 'services') {
    let service = [];

    if (apartment?.about?.view === 'Вид на море') {
      service.push('sea-view');
    } else {
      service.push('city-view');
    }
    if (apartment.about?.balcony === 'С балконом') {
      service.push('balcony');
    }
    if (apartment.services?.oven) {
      service.push('oven');
    }
    if (apartment.services?.dishwasher) {
      service.push('dishwasher');
    }
    if (apartment.services?.coffeeMachine) {
      service.push('coffee-machine');
    }

    const readyService = categoryService(service.join('+'));

    field = Object.assign({}, ...readyService);
  }
  if (option === 'price') {
    field = { summerPrice: { $gt: apartment.summerPrice - 2000, $lt: apartment.summerPrice + 2000 } };
  }
  return field;
};
