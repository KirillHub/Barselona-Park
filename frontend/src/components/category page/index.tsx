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
import useSWR from 'swr';

import axios from 'axios';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const useCategory = (category: string) => {
  const { data, error, isLoading } = useSWR<Apartment[], any, any>(
    `http://localhost:3500/Apartments/${category}/Sorted-by-summer-season+more/sea-view/6`,
    fetcher,
  );

  return {
    user: data,
    isLoading,
    isError: error,
  };
};

export default function Category() {
  const setSelectedPageId = useStore((state) => state.setSelectedPageId);
  const selectedPageId = useStore((state) => state.selectedPageId);

  const apartmentsLenth = useStore((state) => state.apartmentsLength);

  const pathname = usePathname();
  const sort = pathname?.split('/')[2];

  const meta = categoryMeta(selectedPageId);

  const { user, isLoading, isError } = useCategory(selectedPageId);

  useEffect(() => {
    setSelectedPageId(sort!);
  }, []);

  return (
    <div className={styles.categoryPage}>
      <h1 className={styles.categoryPageTitle}>
        {meta?.name} - {apartmentsLenth}
      </h1>

      <div className={styles.categoryPageBlocks}>
        <CategoryInteraction />

        <div className={styles.categoryPageRightBlock}>
          {user?.map((apartment: Apartment, index) => (
            <ApartmentCard apartment={apartment} index={index} key={apartment.apartmentName} />
          ))}
        </div>
      </div>
    </div>
  );
}
