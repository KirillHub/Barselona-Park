'use client';
import useStore from '../../store/useStore';
import { ApartmentCard } from '../../components/category page/apartments card';
import { CategoryInteraction } from '../../components/category page/category interaction';
import { usePathname, useRouter } from 'next/navigation';
import styles from './style.module.scss';
import { categoryMeta } from '../meta/categoryMeta';
import { useEffect } from 'react';
import Head from 'next/head';

export const Category = () => {
  const setSelectedPageId = useStore((state) => state.setSelectedPageId);
  const selectedPageId = useStore((state) => state.selectedPageId);

  const apartmentsLenth = useStore((state) => state.apartmentsLength);

  const router = useRouter();

  const pathname = usePathname();
  const sort = pathname?.split('/')[2];

  const meta = categoryMeta(selectedPageId);

  useEffect(() => {
    setSelectedPageId(sort);
  }, []);

  return (
    <>
      <div className={styles.categoryPage}>
        <h1 className={styles.categoryPageTitle}>
          {meta?.name} - {apartmentsLenth}
        </h1>

        <div className={styles.categoryPageBlocks}>
          <CategoryInteraction />

          <ApartmentCard />
        </div>
      </div>
    </>
  );
};

export default Category;
