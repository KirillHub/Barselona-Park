import { useAppDispatch } from '../../../../store/store';
import { Link } from 'react-router-dom';
import { meta } from '../../../meta/categoryMeta';
import { setCheckBox } from '../../../../store/category/slice';

export const SelectCategory = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="category-page-container__sorting__dropdown">
      <button className="category-page-container__sorting__dropdown-button">Сменить категорию</button>
      <div className="category-page-container__sorting__dropdown__content">
        {meta.map((x) => (
          <Link
            to={`/Category/${x.id}`}
            onClick={() => dispatch(setCheckBox([false, false, false, false, false, false]))}
            key={x.id}>
            {x.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
