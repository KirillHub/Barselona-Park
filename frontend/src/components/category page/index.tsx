"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { ApartmentCard } from "../../components/category page/apartments card";
import { CategoryInteraction } from "../../components/category page/category interaction";
import Head from "next/head";
import { MyApartments } from "../../helpers/types/type";
import { apartmentsData } from "../../fake/apartmnetsData";
import { categoryMeta } from "../../helpers/meta/categoryMeta";
import styles from "./style.module.scss";
import useSWR from "swr";
import useStore from "../../store/useStore";

export const dynamic = "force-static";

interface Myfetch {
  data: MyApartments[];
  length: number;
}

const fetcher = (url: string) =>
  fetch(url, { cache: "force-cache" }).then((res) => res.json());

const path = "http://localhost:3500" || "https://barsa-back.onrender.com";

const useCategory = (category: string, sort: string, service: string) => {
  const { data, error, isLoading } = useSWR<Myfetch, any, any>(
    `https://barsa-back.onrender.com/Category/${category}/${sort}/${service}`,
    fetcher
  );

  return {
    user: data,
    isLoading,
    isError: error,
  };
};

export default function Category() {
  const pathname = usePathname();
  const category = pathname?.split("/")[2];
  const sort = pathname?.split("/")[3];
  const service = pathname?.split("/")[4];

  const meta = categoryMeta(category);

  const { user, isLoading, isError } = useCategory(category!, sort!, service!);

  const aparts = user?.data;


  ///840 776 630 576 700 540 598 592 256
  //416
  return (
    <div className={styles.category} >

      <h1 className={styles.category__title}>
        {meta?.name} - {user?.length}
      </h1>

      <div className={styles.category__content}>
        <CategoryInteraction />

        <div className={styles.category__apartments}>
          {aparts?.map((apartment: MyApartments, index) => (
            <ApartmentCard
              apartment={apartment}
              index={index}
              key={apartment.apartmentName}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

