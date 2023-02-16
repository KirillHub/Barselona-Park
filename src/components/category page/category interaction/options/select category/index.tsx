import { useState } from 'react';
import Link from 'next/link';
import { More } from '../../../../../svg';
import { meta } from '../../../../meta/categoryMeta';
import styles from '../style.module.scss';

export const SelectCategory = () => {
  const [showCategories, setShowCategories] = useState(false);

  // const dispatch = useAppDispatch();

  return (
    <div
      className={styles.swapCategory}
      onClick={() => setShowCategories((prev) => !prev)}
      onMouseLeave={() => setShowCategories(false)}>
      <button className={styles.swapCategoryButton}>
        Сменить категорию
        <div className={styles.optionsIcon}>
          <More />
        </div>
      </button>
      <div
        className={
          styles.swapCategoryContent + ' ' + `${showCategories ? styles.visible : styles.hidden}`
        }>
        {meta.map((x) => (
          <Link href={`/Category/${x.id}`} key={x.id}>
            {x.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
