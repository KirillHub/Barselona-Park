"use client";

import { ApartmentInfo } from "./apartment info";
import { MyApartments } from "../../../helpers/types/type";
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
      
          sizes:
            "calc(60px + 420 * (100vw / 1920)), (max-width: 805px) calc(100px + 225 * (100vw / 805)), (max-width: 605px) calc(5px + 465 * (100vw / 605))",
          fit: "contain",
          border: 5,
          lazy: 1,
          quality: 75,
        }}
      />

      <ApartmentInfo apartment={apartment} />
    </div>
  );
};
