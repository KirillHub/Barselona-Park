import { usePathname } from "next/navigation";
import React from "react";

import { BookingButton } from "./booking button";
import { GuestsNights } from "./guests nights";
import { CheckInCheckOut } from "./search by date";
import { SelectCategory } from "./select category";
import styles from "./style.module.scss";

export const Options = () => {
  const pathname = usePathname();

  const first = pathname?.split("/")[1];

  const checkCategory = first === "Category";

  return (
    <div className={styles.options}>
      {checkCategory ? <SelectCategory /> : ""}
      <div className={styles.optionsBottom}>
        <CheckInCheckOut />
        <GuestsNights />
      </div>
      {!checkCategory ? <BookingButton /> : ""}
    </div>
  );
};
