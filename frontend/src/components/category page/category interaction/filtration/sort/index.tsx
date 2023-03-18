import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import useStore from "../../../../../store/useStore";
import styles from "../style.module.scss";

interface MyParams {
  category: string;
  sort: string;
}

interface MyProps {
  resetSorts: Function;
}

export const Sort = ({ resetSorts }: MyProps) => {
  const setCheckSign = useStore((state) => state.setCheckSign);
  const checkSign = useStore((state) => state.checkSign);
  const opitionsSortedLink = useStore((state) => state.opitionsSortedLink);
  const pathname = usePathname();

  const ha = pathname?.split("/")[2];
  const category = pathname?.split("/")[3];
  const sort = pathname?.split("/")[4];

  const sortBy = [
    {
      option: "Sorted-by-summer-season",
      name: "По цене Летний сезон",
      ru: {
        more: "Дороже",
        less: "Дешевле",
      },
    },
    {
      option: "Sorted-by-winter-season",
      name: "По цене Зимний сезон ",
      ru: {
        more: "Дороже",
        less: "Дешевле",
      },
    },
    {
      option: "Sorted-by-square-meters",
      name: "По кв. м",
      ru: {
        more: "Больше",
        less: "Меньше",
      },
    },
    {
      option: "Sorted-by-floor",
      name: "По этажу",

      ru: {
        more: "Выше",
        less: "Ниже",
      },
    },
    {
      option: "Sorted-by-number-of-rooms",
      name: "По количеству комнат",
      ru: {
        more: "Больше",
        less: "Меньше",
      },
    },
    {
      option: "Sorted-by-number-of-beds",
      name: "По количеству мест",
      ru: {
        more: "Больше",
        less: "Меньше",
      },
    },
  ];

  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleDropdown = (index: any) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const onHandleClick = (index: number) => {
    setCheckSign(index);
  };

  const checkLink = !category || category !== "Without-sort";

  const checkOption = category?.split("+")[0];

  const categoryMore = category?.split("+")[1] === "more";
  const categoryLess = category?.split("+")[1] === "less";

  return (
    <div className={styles.filtration}>
      <p className={styles.filtration__title}>Сортировка</p>

      <div className={styles.filtration__content}>
        {sortBy.map((option, index) => (
          <div
            className={styles.filtration__controls}
            key={option.option}
            onMouseLeave={() => toggleDropdown(openDropdownIndex)}
          >
            <span
              className={`
                ${styles.filtration__option} ${
                checkOption === option.option
                  ? styles.filtration__option_active
                  : ""
              }`}
              onClick={() => toggleDropdown(index)}
            >
              {option.name}
            </span>

            {openDropdownIndex === index && (
              <div className={styles.filtration__dropDown}>
                <Link
                  href={`/Category/${ha}/${option.option}+more/${opitionsSortedLink}`}
                  className={
                    categoryMore && checkOption === option.option
                      ? styles.filtration__option_active
                      : ""
                  }
                  onClick={() => onHandleClick(index)}
                >
                  {option.ru.more}
                </Link>

                <Link
                  href={`/Category/${ha}/${option.option}+less/${opitionsSortedLink}`}
                  className={
                    categoryLess && checkOption === option.option
                      ? styles.filtration__option_active
                      : ""
                  }
                  onClick={() => onHandleClick(index)}
                >
                  {option.ru.less}
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>

      <p
        className={styles.filtration__reset}
        onClick={() => (checkLink ? resetSorts("sort") : "")}
      >
        Cброс
      </p>
    </div>
  );
};
