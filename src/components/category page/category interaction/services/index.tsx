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
    <div className={styles.servicesSort}>
      <p className={styles.servicesSortTitle}>Услуги</p>

      <div className={styles.servicesSortBox}>
        {sortBy.map((option, index) => (
          <span key={index} className={styles.servicesSortBoxOption}>
            <input type="checkbox" onChange={() => onCheckBoxFirstChange(index)} checked={checkBox[index]} />
            <span>{option}</span>
          </span>
        ))}
      </div>

      <div className={styles.servicesSortDownBlock}>
        <span>Применить</span>
        <span onClick={() => resetSorts('availability')}>Cброс</span>
      </div>
    </div>
  );
};
