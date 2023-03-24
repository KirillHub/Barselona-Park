"use client";

import { ApartmentInfo } from "./apartment info";
import { MyApartments } from "../../../types/type";
import { SliderImages } from "./slider images";
import styles from "./style.module.scss";

interface MyProps {
  apartment: MyApartments;
  index: number;
}

export const ApartmentCard = ({ apartment, index }: MyProps) => {
  return (
    <div className={styles.apartments}>
      <SliderImages
        apartment={apartment}
        apartmentIndex={index}
        options={{
          sizes: `
             (max-width: 805px) calc(50px + 300 * (100vw / 805)) ,
              (max-width: 605px) calc(5px + 465 * (100vw / 605)),
               calc(60px + 420 * (100vw / 1920)) `,
          fit: "contain",
          border: 5,
          lazy: 1,
          quality: 100,
        }}
      />

      <ApartmentInfo apartment={apartment} />
    </div>
  );
};
