import styles from '../style.module.scss';

interface MyProps {
  onCheckBoxFirstChange: Function;
  resetSorts: Function;
}

export const Services = ({ onCheckBoxFirstChange, resetSorts }: MyProps) => {
  const sortBy = [
    'Вид на море',
    'Балкон',
    'Вид на город',
    'Духовка',
    'Посудомоечная',
    'Кофемашина',
  ];

  return (
    <div className={styles.servicesSort}>
      <p className={styles.servicesSortTitle}>Услуги</p>

      <div className={styles.servicesSortBox}>
        {sortBy.map((option, index) => (
          <span key={index} className={styles.servicesSortBoxOption}>
            <input type="checkbox" onChange={() => onCheckBoxFirstChange(index)} checked={false} />
            <span>{option}</span>
          </span>
        ))}
      </div>

      <span onClick={() => resetSorts('availability')}>Cброс</span>
    </div>
  );
};
