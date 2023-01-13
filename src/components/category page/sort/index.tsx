import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './style.scss';

interface MyParams {
  id: string;
  sort: string;
  stock: string;
}

export const Sort = () => {
  const { id, sort, stock } = useParams<keyof MyParams>() as MyParams;
  const [checkBox, setCheckBox] = useState([false, false, false, false, false, false]);

  const onCheckBoxFirstChange = (checkBoxIndex: number) => {
    const box = checkBox;

    if (checkBoxIndex === 0 || checkBoxIndex === 1) {
      if (!box[0] && !box[1]) {
        box.splice(checkBoxIndex, 1, true);
        setCheckBox([...box]);
      } else if (box[0]) {
        if (checkBoxIndex === 0) {
          box.splice(0, 1, false);
        } else {
          box.splice(0, 2, false, true);
        }
        setCheckBox([...box]);
      } else {
        if (checkBoxIndex === 1) {
          box.splice(1, 1, false);
        } else {
          box.splice(0, 2, true, false);
        }
        setCheckBox([...box]);
      }
    } else {
      if (checkBox[checkBoxIndex]) {
        box.splice(checkBoxIndex, 1, false);
        console.log(1);
        setCheckBox([...box]);
      } else {
        box.splice(checkBoxIndex, 1, true);
        console.log(1);
        setCheckBox([...box]);
      }
    }
  };

  return (
    <div className="category-page-container__sorting">
      <div className="category-page-container__sorting__dropdown">
        <button className="category-page-container__sorting__dropdown-button">Сортировка</button>
        <div className="category-page-container__sorting__dropdown__content">
          <Link to={`/Category/${id}/Sorted-by-summer-season`}>По цене Летний сезон</Link>
          <Link to={`/Category/${id}/Sorted-by-winter-season`}>По цене Зимний сезон</Link>
          <Link to={`/Category/${id}/Sorted-by-floor`}>По этажу</Link>
          <Link to={`/Category/${id}/Sorted-by-number-of-rooms`}>По количеству комнат</Link>
          <Link to={`/Category/${id}/Sorted-by-number-of-beds`}>По количеству спальных мест</Link>
          <Link to={`/Category/${id}/Sorted-by-square-meters`}>По кв. м</Link>
          <Link to={`/Category/${id}`}>Сброс</Link>
        </div>
      </div>

      <div className="category-page-container__sorting__dropdown">
        <button className="category-page-container__sorting__dropdown-button">Наличие</button>
        <div className="category-page-container__sorting__dropdown__content">
          <span>
            Вид на море
            <input type="checkbox" onChange={() => onCheckBoxFirstChange(0)} checked={checkBox[0]} />
          </span>
          <span>
            Вид на город
            <input type="checkbox" onChange={() => onCheckBoxFirstChange(1)} checked={checkBox[1]} />
          </span>
          <span>
            Балкон
            <input type="checkbox" onChange={() => onCheckBoxFirstChange(2)} checked={checkBox[2]} />
          </span>
          <span>
            Духовка 
            <input type="checkbox" onChange={() => onCheckBoxFirstChange(3)} checked={checkBox[3]} />
          </span>
          <span>
            Посудомоечная <div> машина </div>
            <input type="checkbox" onChange={() => onCheckBoxFirstChange(4)} checked={checkBox[4]} />
          </span>
          <span>
            Кофемашина
            <input type="checkbox" onChange={() => onCheckBoxFirstChange(5)} checked={checkBox[5]} />
          </span>
          <span onClick={() => setCheckBox([false, false, false, false, false,false])}>Cброс</span>
        </div>
      </div>

      <div className="category-page-container__sorting__dropdown">
        <button className="category-page-container__sorting__dropdown-button">Сменить категорию</button>
        <div className="category-page-container__sorting__dropdown__content">
          <span>Все апартаменты</span>
          <span>С балконом</span>
          <span>Без балкона</span>
          <span>Студии</span>
          <span>Однокомнатные</span>
          <span>Двухкомнатные</span>
          <span>Трехкомнатные</span>
          <span>Вид на море</span>
          <span>Вид на город</span>
          <span>3 cпальных места</span>
          <span>4 cпальных места</span>
          <span>5 cпальных мест</span>
          <span>6 cпальных мест</span>
          <span>С кофемашиной</span>
          <span>С духовкой</span>
          <span>С посудомоечной машиной</span>
          <span>С духовкой и посудомоечной машиной</span>
          <span>Cброс</span>
        </div>
      </div>

      <div className="category-page-container__sorting__dropdown">
        <button className="category-page-container__sorting__dropdown-button">Сбросить все</button>
      </div>
    </div>
  );
};
