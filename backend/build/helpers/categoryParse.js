export const categoryPars = (category) => {
    var _a;
    const allCategories = [
        {
            id: 'All-apartments',
            filterBy: { 'about.floor': { $gt: '0' } },
        },
        {
            id: 'With-balcony',
            filterBy: { 'about.balcony': 'С балконом' },
        },
        {
            id: 'Without-balcony',
            filterBy: { 'about.balcony': 'Без балкона' },
        },
        {
            id: 'Studio',
            filterBy: { 'about.rooms': '0' },
        },
        {
            id: 'One-room',
            filterBy: { 'about.rooms': '1' },
        },
        {
            id: 'Two-room',
            filterBy: { 'about.rooms': '2' },
        },
        {
            id: 'Three-room',
            filterBy: { 'about.rooms': '3' },
        },
        {
            id: 'Sea-view',
            filterBy: { 'about.view': 'Вид на море' },
        },
        {
            id: 'City-view',
            filterBy: { 'about.view': 'Вид на город' },
        },
        {
            id: '3-sleeping-places',
            filterBy: { 'about.sleepingPlaces': '3' },
        },
        {
            id: '4-sleeping-places',
            filterBy: { 'about.sleepingPlaces': '4' },
        },
        {
            id: '5-sleeping-places',
            filterBy: { 'about.sleepingPlaces': '5' },
        },
        {
            id: '6-sleeping-places',
            filterBy: { 'about.sleepingPlaces': '6' },
        },
        {
            id: 'With-coffee-machine',
            filterBy: { 'services.coffeeMachine': true },
        },
        {
            id: 'With-oven',
            filterBy: { 'services.stove': true },
        },
        {
            id: 'With-dishwasher',
            filterBy: { 'services.dishwasher': true },
        },
        {
            id: 'With-oven-and-dishwasher',
            filterBy: { 'services.oven': true, 'services.dishwasher': true },
        },
    ];
    return (_a = allCategories.find((obj) => obj.id === category)) === null || _a === void 0 ? void 0 : _a.filterBy;
};
//# sourceMappingURL=categoryParse.js.map