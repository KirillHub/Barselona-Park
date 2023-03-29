import { SimilarApartments } from "@/components/apartment page/similar apartments";
import { apartmentsData } from "@/fake/apartmnetsData";
import { readyIcons } from "@/helpers/functions/readyIcons";
import { MyApartments } from "@/types/type";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";

const ApartamentsSlider = () => {
  const [widthValue, setWidthValue] = useState<number>();
  const apartamentCount = 12;

  const apartment: MyApartments[] = [];
  while (apartment.length < apartamentCount) {
    const randomIndex = Math.floor(Math.random() * apartmentsData.length);
    if (!apartment.includes(apartmentsData[randomIndex])) {
      apartment.push(apartmentsData[randomIndex]);
    }
  }

  const handleWidthChange = (value: number) => {
    setWidthValue(value);
  };

    const displayedPictures = widthValue! >= 759 ? 2 : 1;

  //   useEffect(() => {
  //    //  handleClick();
  //   }, [apartment?.apartmentName]);

    if (apartment === undefined) return <div>Загрузка</div>;

  return (
     <div>
       <SimilarApartments onWidthChange={handleWidthChange} apartmentId={1416} />
     </div>
  );
};

export default ApartamentsSlider;
