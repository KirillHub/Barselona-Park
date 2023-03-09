import useStore from '../../../../store/useStore';
import styles from '../style.module.scss';
import { meta } from '../../../meta/categoryMeta';
import { usePathname } from 'next/navigation';

interface MyProps {
  onCheckBoxFirstChange: Function;
  resetSorts: Function;
}

export const Services = ({ onCheckBoxFirstChange, resetSorts }: MyProps) => {
  const checkBox = useStore((state) => state.checkBox);

  const sortBy = [
    { box: 'Вид на море', index: 0 },
    { box: 'Вид на город', index: 1 },
    { box: 'Балкон', index: 2 },
    { box: 'Духовка', index: 3 },
    { box: 'Посудомоечная', index: 4 },
    { box: 'Кофемашина', index: 5 },
  ];

  const pathname = usePathname();
  const category = pathname?.split('/')[2];

  const filteredArray = meta.find((x) => x.id === category);

  let arr = [...sortBy];

  if (filteredArray?.link === 'Вид на море' || filteredArray?.link === 'Вид на город') {
    sortBy.splice(0, 2);

    arr = [...sortBy];
  } else if (sortBy.find((x) => x.box === filteredArray?.link)) {
    sortBy.splice(
      sortBy.findIndex((x) => x.box === filteredArray?.link),
      1,
    );

    arr = [...sortBy];
  }

  return (
    <div className={styles.sort}>
      <p className={styles.sortTitle}>Услуги</p>

      <div className={styles.sortBox}>
        {arr.map((option, index) => (
          <span key={index} className={styles.sortBoxInside}>
            <input
              type="checkbox"
              onChange={() => onCheckBoxFirstChange(option.index)}
              checked={checkBox[index]}
            />

            <span
              onClick={() => onCheckBoxFirstChange(option.index)}
              className={styles.sortBoxInsideOption}
            >
              {option.box}
            </span>
          </span>
        ))}
      </div>

      <div className={styles.sortDownBlock}>
        <span onClick={() => resetSorts('availability')}>Cброс</span>
      </div>
    </div>
  );
};
