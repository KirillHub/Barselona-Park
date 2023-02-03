import Link from 'next/link';
import { meta } from '../../../meta/categoryMeta';

export const SelectCategory = () => {
  // const dispatch = useAppDispatch();

  return (
    <div className="category-page-container__sorting__dropdown">
      <button className="category-page-container__sorting__dropdown-button">Сменить категорию</button>
      <div className="category-page-container__sorting__dropdown__content">
        {meta.map((x) => (
          <Link
            href={`/Category/${x.id}`}
            key={x.id}>
            {x.name}
          </Link>
        ))}
      </div>
    </div>
  );
};