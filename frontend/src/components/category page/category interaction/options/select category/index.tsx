import { useState } from 'react';
import Link from 'next/link';
import { More } from '../../../../../svg';
import { categoryMeta, meta } from '../../../../meta/categoryMeta';
import styles from '../style.module.scss';
import useStore from '../../../../../store/useStore';
import { usePathname } from 'next/navigation';

export const SelectCategory = () => {
  const [showCategories, setShowCategories] = useState(false);

  const selectedPageId = useStore((state) => state.selectedPageId);
  const setCheckBox = useStore((state) => state.setCheckBox);

 const pathname = usePathname();
 const category = pathname?.split('/')[2];


  return (
    <div
      className={styles.swapCategory}
      onClick={() => setShowCategories((prev) => !prev)}
      onMouseLeave={() => setShowCategories(false)}
    >
      <button className={styles.swapCategoryButton}>
        Сменить категорию
        <div className={styles.optionsIcon}>
          <More />
        </div>
      </button>

      <div
        className={
          styles.swapCategoryContent + ' ' + `${showCategories ? styles.visible : styles.hidden}`
        }
      >
        {meta.map((x) => (
          <Link
            href={`/Category/${x.id}`}
            key={x.id}
            className={category === x.id ? styles.selectedCategory : ''}
            onClick={() => setCheckBox([false, false, false, false, false, false])}
          >
            {x.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
