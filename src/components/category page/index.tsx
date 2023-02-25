'use client';
import useStore from '../../store/useStore';
import { ApartmentCard } from '../../components/category page/apartments card';
import { CategoryInteraction } from '../../components/category page/category interaction';
import { usePathname } from 'next/navigation';
import styles from './style.module.scss';
import { categoryMeta } from '../meta/categoryMeta';
import { useEffect } from 'react';
import Head from 'next/head';

export const Category = () => {
  const setSelectedPageId = useStore((state) => state.setSelectedPageId);
  const selectedPageId = useStore((state) => state.selectedPageId);

  const pathname = usePathname();
  const sort = pathname?.split('/')[2];

  const meta = categoryMeta(selectedPageId);


  useEffect(() => {
    setSelectedPageId(sort);
  }, []);

  return (
    <>
      <Head>
        <title>{meta?.title}</title>
        <meta name="description" content={meta?.description} />
        <meta name="keywords" content={meta?.keywords} />
        <meta name="Document-state" content="Dynamic" />
        <meta name="Author" content="https://github.com/bi-zi" />
        <meta name="Copyright" content="bi_zi" />
      </Head>
      <div className={styles.categoryPage}>
        <h1 className={styles.categoryPageTitle}>{meta?.name}</h1>

        <div className={styles.categoryPageBlocks}>
          <CategoryInteraction />

          <ApartmentCard />
        </div>
      </div>
    </>
  );
};

export default Category;
