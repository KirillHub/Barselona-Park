export const categorySort = (apartments, link) => {
    const [first, second] = link.split('+');
    const easySort = [
        {
            id: 'Sorted-by-summer-season',
            sort: 'summerPrice',
        },
        {
            id: 'Sorted-by-winter-season',
            sort: 'winterPrice',
        },
    ];
    const hardSort = [
        {
            id: 'Sorted-by-number-of-rooms',
            sort: 'rooms',
        },
        {
            id: 'Sorted-by-number-of-beds',
            sort: 'sleepingPlaces',
        },
        {
            id: 'Sorted-by-square-meters',
            sort: 'squareMeters',
        },
        {
            id: 'Sorted-by-floor',
            sort: 'floor',
        },
    ];
    const selectedSort = first === 'Sorted-by-summer-season' || first === 'Sorted-by-winter-season'
        ? easySort
        : hardSort;
    const sortOption = selectedSort.find((x) => x.id === first);
    const sorter = (field) => {
        if (selectedSort.length === 2) {
            if (second === 'more') {
                return (a, b) => { var _a, _b, _c, _d; return +((_b = (_a = a[field]) === null || _a === void 0 ? void 0 : _a.split(' ')) === null || _b === void 0 ? void 0 : _b.join('')) > +((_d = (_c = b[field]) === null || _c === void 0 ? void 0 : _c.split(' ')) === null || _d === void 0 ? void 0 : _d.join('')) ? -1 : 1; };
            }
            else {
                return (a, b) => { var _a, _b, _c, _d; return +((_b = (_a = a[field]) === null || _a === void 0 ? void 0 : _a.split(' ')) === null || _b === void 0 ? void 0 : _b.join('')) < +((_d = (_c = b[field]) === null || _c === void 0 ? void 0 : _c.split(' ')) === null || _d === void 0 ? void 0 : _d.join('')) ? -1 : 1; };
            }
        }
        else {
            if (second === 'more') {
                return (a, b) => { var _a, _b, _c, _d; return +((_b = (_a = a.about[field]) === null || _a === void 0 ? void 0 : _a.split(' ')) === null || _b === void 0 ? void 0 : _b.join('')) > +((_d = (_c = b.about[field]) === null || _c === void 0 ? void 0 : _c.split(' ')) === null || _d === void 0 ? void 0 : _d.join('')) ? -1 : 1; };
            }
            else {
                return (a, b) => { var _a, _b, _c, _d; return +((_b = (_a = a.about[field]) === null || _a === void 0 ? void 0 : _a.split(' ')) === null || _b === void 0 ? void 0 : _b.join('')) < +((_d = (_c = b.about[field]) === null || _c === void 0 ? void 0 : _c.split(' ')) === null || _d === void 0 ? void 0 : _d.join('')) ? -1 : 1; };
            }
        }
    };
    return apartments.sort(sorter(sortOption === null || sortOption === void 0 ? void 0 : sortOption.sort));
};
//# sourceMappingURL=categorySort.js.map