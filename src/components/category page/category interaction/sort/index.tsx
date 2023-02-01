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


  const pathname = usePathname()

  const category = pathname?.split('/')[3];
  const sort = pathname?.split('/')[4];

  // const { category, sort } = useParams<keyof MyParams>() as MyParams;

  const sortBy = [
    {
      option: 'Sorted-by-summer-season',
      name: 'По цене Летний сезон',
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
      name: 'По количеству спальных мест',
    },
    {
      option: 'Sorted-by-square-meters',
      name: 'По кв. м',
    },
  ];

  const onHandleClick = (index: number) => {
    // dispatch(setCheckSign(index));
  };

  return (
    <div className="category-page-container__sorting__dropdown">
      <button className="category-page-container__sorting__dropdown-button">Сортировка</button>
      <div className="category-page-container__sorting__dropdown__content">
        {sortBy.map((option, index) => (
          <Link
            className={`${sort === option.option ? 'active' : ''}`}
            href={`/Category/${category}/${option.option}${'categoryPage.opitionsSortedLink'}`}
            onClick={() => onHandleClick(index)}
            key={index}>

          </Link>
        ))}
        <a href="https://wa.me/79996304650?text=Меня%20интересует%20ваше%20объявление%20о%20продаже%20машины">
          123
        </a>
        <span onClick={() => resetSorts('sort')}>Сброс</span>
      </div>
    </div>
  );
};

//  {`${option.name} ${categoryPage.checkSign[index] ? '<' : '>'}`}
