'use client';
import useStore from '../../store/useStore';
import { ApartmentCard } from '../../components/category page/apartments card';
import { CategoryInteraction } from '../../components/category page/category interaction';
import { usePathname, useRouter } from 'next/navigation';
import styles from './style.module.scss';
import { categoryMeta } from '../meta/categoryMeta';
import { useEffect } from 'react';
import Head from 'next/head';
import { Apartment } from '../types/type';


interface MyProps {
  apartmentsData: Apartment[];
}

const Category = ({ apartmentsData }: MyProps) => {
  const setSelectedPageId = useStore((state) => state.setSelectedPageId);
  const selectedPageId = useStore((state) => state.selectedPageId);

  const apartmentsLenth = useStore((state) => state.apartmentsLength);

  console.log(apartmentsData);

  const pathname = usePathname();
  const sort = pathname?.split('/')[2];

  const meta = categoryMeta(selectedPageId);

  useEffect(() => {
    setSelectedPageId(sort);
  }, []);

  return (
    <div className={styles.categoryPage}>
      <h1 className={styles.categoryPageTitle}>
        {meta?.name} - {apartmentsLenth}
      </h1>

      <div className={styles.categoryPageBlocks}>
        <CategoryInteraction />
        
        <div className={styles.categoryPageRightBlock}>
          {apartmentsData.map((apartment, index) => (
            <ApartmentCard apartment={apartment} index={index} key={apartment.apartmentName} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
