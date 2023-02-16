'use client';

import { ApartmentCard } from '../../components/category page/apartments card';
import { CategoryInteraction } from '../../components/category page/category interaction';
import styles from './style.module.scss';

export const Category = () => {
  return (
    <div className={styles.categoryPage}>
      <h1 className={styles.categoryPageTitle}>Категория</h1>

      <div className={styles.categoryPageBlocks}>
        <CategoryInteraction />

        <ApartmentCard />
      </div>
    </div>
  );
};

export default Category;
