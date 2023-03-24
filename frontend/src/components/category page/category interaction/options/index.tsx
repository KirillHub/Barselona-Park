import { usePathname } from "next/navigation";
import { BookingButton } from "./booking button";
import { Interaction } from "./interaction";
import { SelectCategory } from "./select category";
import styles from "./style.module.scss";

export const Options = () => {
  const pathname = usePathname();
  const first = pathname?.split("/")[1];

  const checkCategory = first === "Category";

  return (
    <div className={styles.options}>
      {checkCategory ? <SelectCategory /> : <BookingButton />}
      <Interaction />
    </div>
  );
};
