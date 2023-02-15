import { useState } from 'react';
import Link from 'next/link';
import { meta } from '../../../../meta/categoryMeta';
import { More } from '../../../../../svg';

import './style.scss';

export const SelectCategory = () => {
  const [showCategories, setShowCategories] = useState(false);

  // const dispatch = useAppDispatch();

  return (
    <div
      className="categories-container"
      onClick={() => setShowCategories((prev) => !prev)}
      onMouseLeave={() => setShowCategories(false)}>
      <button className="categories-container-button">
        Сменить категорию
        <div className="more-more">
          <More />
        </div>
      </button>
      <div
        className={`categories-container-content ${showCategories ? 'visible-title' : 'hidden-title'}`}>
        {meta.map((x) => (
          <Link href={`/Category/${x.id}`} key={x.id}>
            {x.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
