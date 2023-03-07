import useStore from '../../../../store/useStore';
import styles from '../style.module.scss';

interface MyProps {
  onCheckBoxFirstChange: Function;
  resetSorts: Function;
}

export const Services = ({ onCheckBoxFirstChange, resetSorts }: MyProps) => {
  const checkBox = useStore((state) => state.checkBox);

  const sortBy = ['Вид на море', 'Вид на город', 'Балкон', 'Духовка', 'Посудомоечная', 'Кофемашина'];

  return (
    <div className={styles.sort}>
      <p className={styles.sortTitle}>Услуги</p>

      <div className={styles.sortBox}>
          {sortBy.map((option, index) => (
            <span key={index} className={styles.sortBoxInside}>
              <input
                type="checkbox"
                onChange={() => onCheckBoxFirstChange(index)}
                checked={checkBox[index]}
              />
              <span onClick={() => onCheckBoxFirstChange(index)} className={styles.sortBoxInsideOption}>
                {option}
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
