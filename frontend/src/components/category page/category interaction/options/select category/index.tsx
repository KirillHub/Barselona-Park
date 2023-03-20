import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import useStore from "../../../../../store/useStore";
import { More } from "../../../../../svg";
import { meta } from "../../../../../helpers/meta/categoryMeta";
import styles from "../style.module.scss";

export const SelectCategory = () => {
  const [showCategories, setShowCategories] = useState(false);

  const selectedPageId = useStore((state) => state.selectedPageId);
  const setCheckBox = useStore((state) => state.setCheckBox);

  const pathname = usePathname();
  const category = pathname?.split("/")[2];

  return (
    <div
      className={styles.change}
      onClick={() => setShowCategories((prev) => !prev)}
      onMouseLeave={() => setShowCategories(false)}
    >
      <button className={styles.change__button}>
        Сменить категорию
        <div className={styles.options__icon}>
          <More />
        </div>
      </button>

      <div
        className={
          styles.change__content +
          " " +
          `${showCategories ? "visible" : "hidden"}`
        }
      >
        {meta.map((x) => (
          <Link
            href={`/Category/${x.id}`}
            key={x.id}
            className={category === x.id ? styles.change__content_selected : ""}
            onClick={() =>
              setCheckBox([false, false, false, false, false, false])
            }
          >
            {x.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
