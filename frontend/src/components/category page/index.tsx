"use client";
import Head from "next/head";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";

import styles from "./style.module.scss";
import { ApartmentCard } from "../../components/category page/apartments card";
import { CategoryInteraction } from "../../components/category page/category interaction";
import { apartmentsData } from "../../fake/apartmnetsData";
import useStore from "../../store/useStore";
import { categoryMeta } from "../helpers/meta/categoryMeta";
import { MyApartments } from "../helpers/types/type";

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
    `http://localhost:3500/Category/${category}/${sort}/${service}`,
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

  //416
  return (
    <div className={styles.category}>

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

