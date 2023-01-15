import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { setCheckSign } from '../../../store/category/slice';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './style.scss';

interface MyParams {
  category: string;
  sort: string;
  options: string;
}

export const Sort = () => {
  const dispatch = useAppDispatch();
  const categoryPage = useAppSelector((state) => state.categoryPage);

  const { category, sort, options } = useParams<keyof MyParams>() as MyParams;

  const navigate = useNavigate();

  const [checkBox, setCheckBox] = useState([false, false, false, false, false, false]);

  const [opitionsSortedLink, setOpitionsSortedLink] = useState('');

  const checkOpitionsLink = () => {
    let opitionsLink = [];

    if (checkBox[0]) {
      opitionsLink.push('sea-view');
    }
    if (checkBox[1]) {
      opitionsLink.push('city-view');
    }
    if (checkBox[2]) {
      opitionsLink.push('balcony');
    }
    if (checkBox[3]) {
      opitionsLink.push('oven');
    }
    if (checkBox[4]) {
      opitionsLink.push('dishwasher');
    }
    if (checkBox[5]) {
      opitionsLink.push('coffee-machine');
    }

    const savedLink = opitionsLink.join('+');

    const newSavedLink = savedLink !== undefined ? savedLink : '';

    setOpitionsSortedLink(newSavedLink.length !== 0 ? `/${newSavedLink}` : '');

    return savedLink !== undefined ? savedLink : '';
  };

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

        setCheckBox([...box]);
      } else {
        box.splice(checkBoxIndex, 1, true);

        setCheckBox([...box]);
      }
    }

    return changeRoute();
  };

  const changeRoute = () => {
    const opitionsLink = checkOpitionsLink();

    const sorted = sort === undefined ? '' : sort;

    let newRoute = '';

    if (sorted.length !== 0 && sorted !== 'Without-sort' && opitionsLink.length === 0) {
      console.log(1);
      newRoute = `/${sorted}`;
    }

    if ((sorted.length === 0 || sorted === 'Without-sort') && opitionsLink.length === 0) {
      console.log(2);
      newRoute = '';
    }

    if (sorted.length !== 0 && opitionsLink.length !== 0) {
      console.log(3);
      newRoute = `/${sorted}/${opitionsLink}`;
    }

    if (sorted.length === 0 && opitionsLink.length !== 0) {
      console.log(4);
      newRoute = `/Without-sort/${opitionsLink}`;
    }

    navigate(`/Category/${category}${newRoute}`);
  };

  const resetSorts = (whatsReset: string) => {
    const sorted = sort === undefined ? '' : sort;

    if (whatsReset === 'availability') {
      setCheckBox([false, false, false, false, false, false]);
      setOpitionsSortedLink('');

      if (sorted.length !== 0 && sorted !== 'Without-sort') {
        navigate(`/Category/${category}/${sorted}`);
      } else {
        navigate(`/Category/${category}`);
      }
    } else {
      const opitionsLink = checkOpitionsLink();
      if (sorted.length !== 0 && sorted !== 'Without-sort' && opitionsLink.length !== 0) {
        navigate(`/Category/${category}/Without-sort/${opitionsLink}`);
      }
      if (sorted.length !== 0 && sorted !== 'Without-sort' && opitionsLink.length === 0) {
        navigate(`/Category/${category}`);
      }
    }
  };

  useEffect(() => {
    if (options !== undefined) {
      const opitionsLink = options.split('+');
      const newOpitionsLink = [
        'sea-view',
        'city-view',
        'balcony',
        'oven',
        'dishwasher',
        'coffee-machine',
      ];

      const updateOpitionsLink = newOpitionsLink
        .map((d, i) => opitionsLink.findIndex((x) => x === d))
        .map((x) => x !== -1);

      setCheckBox(updateOpitionsLink);
    }
  }, []);

  return (
    <div className="category-page-container__sorting">
      <div className="category-page-container__sorting__dropdown">
        <button className="category-page-container__sorting__dropdown-button">Сортировка</button>
        <div className="category-page-container__sorting__dropdown__content">
          <Link
            className={`${sort === 'Sorted-by-summer-season' ? 'active' : ''}`}
            to={`/Category/${category}/Sorted-by-summer-season${opitionsSortedLink}`}
            onClick={() => dispatch(setCheckSign(0))}>
            По цене Летний сезон {categoryPage.checkSign[0] ? '>' : '<'}
          </Link>
          <Link
            className={`${sort === 'Sorted-by-winter-season' ? 'active' : ''}`}
            to={`/Category/${category}/Sorted-by-winter-season${opitionsSortedLink}`}
            onClick={() => dispatch(setCheckSign(1))}>
            По цене Зимний сезон {categoryPage.checkSign[1] ? '>' : '<'}
          </Link>
          <Link
            className={`${sort === 'Sorted-by-floor' ? 'active' : ''}`}
            to={`/Category/${category}/Sorted-by-floor${opitionsSortedLink}`}
            onClick={() => dispatch(setCheckSign(2))}>
            По этажу {categoryPage.checkSign[2] ? '>' : '<'}
          </Link>
          <Link
            className={`${sort === 'Sorted-by-number-of-rooms' ? 'active' : ''}`}
            to={`/Category/${category}/Sorted-by-number-of-rooms${opitionsSortedLink}`}
            onClick={() => dispatch(setCheckSign(3))}>
            По количеству комнат {categoryPage.checkSign[3] ? '>' : '<'}
          </Link>
          <Link
            className={`${sort === 'Sorted-by-number-of-beds' ? 'active' : ''}`}
            to={`/Category/${category}/Sorted-by-number-of-beds${opitionsSortedLink}`}
            onClick={() => dispatch(setCheckSign(4))}>
            По количеству спальных мест {categoryPage.checkSign[4] ? '>' : '<'}
          </Link>
          <Link
            className={`${sort === 'Sorted-by-square-meters' ? 'active' : ''}`}
            to={`/Category/${category}/Sorted-by-square-meters${opitionsSortedLink}`}
            onClick={() => dispatch(setCheckSign(5))}>
            По кв. м {categoryPage.checkSign[5] ? '>' : '<'}
          </Link>
          <span onClick={() => resetSorts('sort')}>Сброс</span>
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
          <span onClick={() => resetSorts('availability')}>Cброс</span>
        </div>
      </div>

      <div className="category-page-container__sorting__dropdown">
        <button className="category-page-container__sorting__dropdown-button">Сменить категорию</button>
        <div className="category-page-container__sorting__dropdown__content">
          <Link to="/Category/All-apartments">Все апартаменты</Link>
          <Link to="/Category/With-balcony">С балконом</Link>
          <Link to="/Category/Without-balcony">Без балкона</Link>
          <Link to="/Category/Studio">Студии</Link>
          <Link to="/Category/One-room">Однокомнатные</Link>
          <Link to="/Category/Two-room">Двухкомнатные</Link>
          <Link to="/Category/Three-room">Трехкомнатные</Link>
          <Link to="/Category/Sea-view">Вид на море</Link>
          <Link to="/Category/City-view">Вид на город</Link>
          <Link to="/Category/3-sleeping-places">3 cпальных места</Link>
          <Link to="/Category/4-sleeping-places">4 cпальных места</Link>
          <Link to="/Category/5-sleeping-places">5 cпальных мест</Link>
          <Link to="/Category/6-sleeping-places">6 cпальных мест</Link>
          <Link to="/Category/With-coffee-machine">С кофемашиной</Link>
          <Link to="/Category/With-oven">С духовкой</Link>
          <Link to="/Category/With-dishwasher">С посудомоечной машиной</Link>
          <Link to="/Category/With-oven-and-dishwasher">С духовкой и посудомоечной машиной</Link>
          <span>Cброс</span>
        </div>
      </div>

      <div className="category-page-container__sorting__dropdown">
        <button className="category-page-container__sorting__dropdown-button">Сбросить все</button>
      </div>
    </div>
  );
};
