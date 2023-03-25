"use client";

import { BookingApartment } from "./booking apartment";
import { BookingInfo } from "./booking info";
import { CustomerInformation } from "./customer information";
import { apartmentsData } from "@/fake/apartmnetsData";
import styles from ".//style.module.scss";
import { usePathname } from "next/navigation";

export default function BookingPage() {
  const pathname = usePathname();

  const apartmentId = pathname?.split("/")[1].split("-")[1];

  const apartment = apartmentsData.find(apart => apart.apartmentName + "" === apartmentId);

  return (
    <div className={styles.booking}>
      <CustomerInformation apartment={apartment!}/>
      <div className={styles.booking__content}>
        <BookingApartment apartment={apartment!}  />
        <BookingInfo />
      </div>
    </div>
  );
}
