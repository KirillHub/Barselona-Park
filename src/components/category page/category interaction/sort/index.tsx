import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/store';
import { setCheckSign } from '../../../../store/category/slice';
import { useParams, Link } from 'react-router-dom';

interface MyParams {
  category: string;
  sort: string;
  options: string;
}

interface MyProps {
  resetSorts: Function;
}

export const Sort = ({ resetSorts }: MyProps) => {
  const dispatch = useAppDispatch();
  const categoryPage = useAppSelector((state) => state.categoryPage);


  const { category, sort, options } = useParams<keyof MyParams>() as MyParams;

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
    dispatch(setCheckSign(index));
  };


  return (
    <div className="category-page-container__sorting__dropdown">
      <button className="category-page-container__sorting__dropdown-button">
        Сортировка
      </button>
      <div className="category-page-container__sorting__dropdown__content">
        {sortBy.map((option, index) => (
          <Link
            className={`${sort === option.option ? 'active' : ''}`}
            to={`/Category/${category}/${option.option}${categoryPage.opitionsSortedLink}`}
            onClick={() => onHandleClick(index)}
            key={index}>
            {`${option.name} ${categoryPage.checkSign[index] ? '<' : '>'}`}
          </Link>
        ))}
        <span onClick={() => resetSorts('sort')}>Сброс</span>
      </div>
    </div>
  );
};
