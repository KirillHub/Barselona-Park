export const categorySort = (apartments: any, link: string) => {
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

  const selectedSort =
    first === 'Sorted-by-summer-season' || first === 'Sorted-by-winter-season'
      ? easySort
      : hardSort;

  const sortOption = selectedSort.find((x) => x.id === first);


  const sorter = (field: string) => {
    if (selectedSort.length === 2) {
      if (second === 'more') {
        return (a: any, b: any) =>
          +a[field]?.split(' ')?.join('') > +b[field]?.split(' ')?.join('') ? -1 : 1;
      } else {
        return (a: any, b: any) =>
          +a[field]?.split(' ')?.join('') < +b[field]?.split(' ')?.join('') ? -1 : 1;
      }
    } else {
       if (second === 'more') {
         return (a: any, b: any) =>
           +a.about[field]?.split(' ')?.join('') > +b.about[field]?.split(' ')?.join('') ? -1 : 1;
       } else {
         return (a: any, b: any) =>
           +a.about[field]?.split(' ')?.join('') < +b.about[field]?.split(' ')?.join('') ? -1 : 1;
       }
    }
  };

  return apartments.sort(sorter(sortOption!?.sort));
};
