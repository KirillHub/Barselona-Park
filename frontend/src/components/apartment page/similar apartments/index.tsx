"use client";

import { LegacyRef, useEffect, useRef, useState } from "react";

import { MyApartments } from "../../../helpers/types/type";
import { SimilarOptions } from "./components/options";
import { SimilarSlider } from "./components/similar slider";
import axios from "axios";
import styles from "./style.module.scss";
import useSWR from "swr";
import useStore from "@/store/useStore";

interface MyProps {
  apartmentId: number;
  onWidthChange: (value: number) => void;
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const useSimilar = (apartmentId: number, option: string) => {
  const { data, error, isLoading } = useSWR<MyApartments[], any, any>(
    `https://barsa-back.onrender.com/GetSimilar/${apartmentId}/${option}`,
    fetcher
  );

  return {
    similarApartments: data,
    isLoading,
    isError: error,
  };
};

export const SimilarApartments = ({ apartmentId, onWidthChange }: MyProps) => {
  const similarOptions = useStore((state) => state.similarOptions);

  const [size, setSize] = useState<any>({});
  const ref = useRef<HTMLDivElement>();

  const { similarApartments, isLoading, isError } = useSimilar(
    apartmentId,
    similarOptions
  );

  const resizeHandler = () => {
    const { clientHeight, clientWidth }: any = ref.current || {};
    setSize({ clientHeight, clientWidth });

    onWidthChange(clientWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const apartmentsInSimilar =
    size.clientWidth >= 1410
      ? 4
      : size.clientWidth <= 1410 && size.clientWidth >= 910
      ? 3
      : size.clientWidth <= 910 && size.clientWidth >= 610
      ? 2
      : 1;

  return (
    <div className={styles.similar} ref={ref as LegacyRef<HTMLDivElement>}>
      <div className={styles.similar__title}>
        <p>Вам также могут понравиться</p>
        <span>
          Апартаменты похожие по
          {similarOptions === "price"
            ? " цене"
            : similarOptions === "services"
            ? " услугам"
            : similarOptions === "floor"
            ? " этажу"
            : " количеству комнат"}
        </span>
      </div>

      <SimilarSlider
        apartments={similarApartments!}
        apartsInSlider={apartmentsInSimilar}
      />

      <SimilarOptions />
    </div>
  );
};
