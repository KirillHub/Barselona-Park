import { useState } from 'react';
import Link from 'next/link';
import { More } from '../../../../../svg';
import { categoryMeta, meta } from '../../../../meta/categoryMeta';
import styles from '../style.module.scss';
import useStore from '../../../../../store/useStore';

export const SelectCategory = () => {
  const [showCategories, setShowCategories] = useState(false);
  const selectedPageId = useStore(state => state.selectedPageId)



  const selectedMeta = categoryMeta(selectedPageId);


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
          <Link href={`/Category/${x.id}`} key={x.id} className={selectedMeta?.id === x.id ? styles.selectedCategory : ''}>
            {x.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
