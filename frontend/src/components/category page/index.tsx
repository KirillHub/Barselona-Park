'use client';
import useStore from '../../store/useStore';
import { ApartmentCard } from '../../components/category page/apartments card';
import { CategoryInteraction } from '../../components/category page/category interaction';
import { usePathname, useRouter } from 'next/navigation';
import styles from './style.module.scss';
import { categoryMeta } from '../helpers/meta/categoryMeta';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Apartment } from '../helpers/types/type';
import useSWR from 'swr';
import { apartmentsData } from '../../fake/apartmnetsData';

export const dynamic = 'force-static';

interface Myfetch {
  data: Apartment[];
  length: number;
}

const fetcher = (url: string) => fetch(url, { cache: 'force-cache' }).then((res) => res.json());

const useCategory = (category: string, sort: string, service: string, quantity: number) => {
  const { data, error, isLoading } = useSWR<Myfetch, any, any>(
    `http://localhost:3500/${category}/${sort}/${service}/${quantity}`,
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

  const [quantity, setQuantity] = useState(6);

  const pathname = usePathname();
  const category = pathname?.split('/')[2];
  const sort = pathname?.split('/')[3];
  const service = pathname?.split('/')[4];

  const meta = categoryMeta(category);

  const { user, isLoading, isError } = useCategory(category!, sort!, service!, quantity);

  const aparts = user?.data;

  // useEffect(() => {
  //   fetch('http://localhost:3500/addNewApartment', {
  //     method: 'POST',
  //     body: JSON.stringify(apartmentsData[0]),
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then(console.log);
  // },[])

  return (
    <div className={styles.categoryPage}>
      <h1 className={styles.categoryPageTitle}>
        {meta?.name} - {user?.length}
      </h1>

      <div className={styles.categoryPageBlocks}>
        <CategoryInteraction />

        <div className={styles.categoryPageRightBlock}>
          {aparts?.map((apartment: Apartment, index) => (
            <ApartmentCard apartment={apartment} index={index} key={apartment.apartmentName} />
          ))}
        </div>
      </div>

      {user!?.length > quantity ? (
        <button className={styles.categoryPageButton1} onClick={() => setQuantity((prev) => prev + 6)}>
          Еще
        </button>
      ) : (
        ''
      )}
    </div>
  );
}
