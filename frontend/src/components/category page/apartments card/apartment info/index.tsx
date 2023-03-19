import { useRouter } from "next/navigation";
import { Options } from "./options";
import { Price } from "./price and button";
import { Service } from "./service";
import styles from "./style.module.scss";
import { MyApartments } from "../../../helpers/types/type";

interface MyProps {
  apartment: MyApartments;
}

export const ApartmentInfo = ({ apartment }: MyProps) => {
  const router = useRouter();
  const handleClick = () =>
    router.push(`/Apartment/${apartment.apartmentName}`);

  return (
    <div className={styles.info}>
      <p className={styles.info__title} onClick={handleClick}>
        Апартамент {apartment.apartmentName}
      </p>

      <Options apartment={apartment} />

      <Service apartment={apartment} />

      <Price apartment={apartment} />
    </div>
  );
};

