export const categoryService = (service: string) => {
  //sea-view+balcony+oven+dishwasher+coffee-machine

  const allService = [
    {
      id: 'sea-view',
      filterBy: { 'about.view': 'Вид на море' },
    },
    {
      id: 'city-view',
      filterBy: { 'about.view': 'Вид на город' },
    },
    {
      id: 'balcony',
      filterBy: { 'about.balcony': 'С балконом' },
    },
    {
      id: 'oven',
      filterBy: { 'services.stove': true },
    },
    {
      id: 'dishwasher',
      filterBy: { 'services.dishwasher': true },
    },
    {
      id: 'coffee-machine',
      filterBy: { 'services.coffeeMachine': true },
    },
  ];

  const splitService = service.split('+');

  const filteredArray = allService.filter((obj) => splitService.includes(obj.id));

  return filteredArray.map((x) => x.filterBy);
};
