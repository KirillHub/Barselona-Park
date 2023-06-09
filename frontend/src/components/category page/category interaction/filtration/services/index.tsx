import { meta } from "../../../../../helpers/meta/categoryMeta";
import styles from "../style.module.scss";
import { usePathname } from "next/navigation";
import useStore from "../../../../../store/useStore";

interface MyProps {
  onCheckBoxFirstChange: Function;
  resetSorts: Function;
}

export const Services = ({ onCheckBoxFirstChange, resetSorts }: MyProps) => {
  const checkBox = useStore(state => state.checkBox);

  const sortBy = [
    { box: "Вид на море", index: 0 },
    { box: "Вид на город", index: 1 },
    { box: "Балкон", index: 2 },
    { box: "Духовка", index: 3 },
    { box: "Посудомойка", index: 4 },
    { box: "Кофемашина", index: 5 },
  ];

  const pathname = usePathname();
  const category = pathname?.split("/")[2];

  const filteredArray = meta.find(x => x.id === category);

  let arr = [...sortBy];

  if (filteredArray?.link === "Вид на море" || filteredArray?.link === "Вид на город") {
    sortBy.splice(0, 2);

    arr = [...sortBy];
  } else if (sortBy.find(x => x.box === filteredArray?.link)) {
    sortBy.splice(
      sortBy.findIndex(x => x.box === filteredArray?.link),
      1
    );

    arr = [...sortBy];
  }

  return (
    <div className={styles.filtration}>
      <p className={styles.filtration__title}>Услуги</p>

      <div className={styles.filtration__content}>
        {arr.map((option, index) => (
          <div key={index} className={styles.filtration__controls}>
            <input
              type='checkbox'
              onChange={() => onCheckBoxFirstChange(option.index)}
              checked={checkBox[option.index]}
            />

            <span
              onClick={() => onCheckBoxFirstChange(option.index)}
              className={styles.filtration__option}
            >
              {option.box}
            </span>
          </div>
        ))}
      </div>

      <p className={styles.filtration__reset} onClick={() => resetSorts("availability")}>
        Cброс
      </p>
    </div>
  );
};
