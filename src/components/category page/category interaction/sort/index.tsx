// import { useAppDispatch, useAppSelector } from '../../../../store/store';
// import { setCheckSign } from '../../../../store/category/slice';
// import { useParams, Link } from 'react-router-dom';

import Link from 'next/link';
import { usePathname } from 'next/navigation';


interface MyParams {
  category: string;
  sort: string;
}

interface MyProps {
  resetSorts: Function;
}

export const Sort = ({ resetSorts }: MyProps) => {
  // const dispatch = useAppDispatch();
  // const categoryPage = useAppSelector((state) => state.categoryPage);

  const pathname = usePathname();

  const category = pathname?.split('/')[3];
  const sort = pathname?.split('/')[4];

  // const { category, sort } = useParams<keyof MyParams>() as MyParams;

  const sortBy = [
    {
      option: 'Sorted-by-summer-season',
      name: 'По цене Летний сезон',
    },
    {
      option: 'Sorted-by-square-meters',
      name: 'По кв. м',
    },
    {
      option: 'Sorted-by-winter-season',
      name: 'По цене Зимний сезон ',
    },
    {
      option: 'Sorted-by-floor',
      name: 'По этажу',
    },
    {
      option: 'Sorted-by-number-of-rooms',
      name: 'По количеству комнат',
    },

    {
      option: 'Sorted-by-number-of-beds',
      name: 'По количеству мест',
    },
  ];

  const onHandleClick = (index: number) => {
    // dispatch(setCheckSign(index));
  };

  return (
    <div className="services">
      <p className="services-title">Сортировка</p>
      <div className="services-checkbox">
        {sortBy.map((option, index) => (
          <Link
            className="services-checkbox-span"
            href={`/Category/${category}/${option.option}${'categoryPage.opitionsSortedLink'}`}
            onClick={() => onHandleClick(index)}
            key={index}>{`⇵ ${option.name} `}</Link>
        ))}
      </div>
      <span onClick={() => resetSorts('sort')}>Сброс</span>
    </div>
  );
};

//{`${option.name} ${categoryPage.checkSign[index] ? '<' : '>'}`}
