// import { useAppSelector } from '../../../../store/store';

import './style.scss';

interface MyProps {
  onCheckBoxFirstChange: Function;
  resetSorts: Function;
}

export const Services = ({ onCheckBoxFirstChange, resetSorts }: MyProps) => {
  // const categoryPage = useAppSelector((state) => state.categoryPage);

  const sortBy = [
    'Вид на море',
    'Вид на город',
    'Балкон',
    'Духовка',
    'Посудомоечная машина',
    'Кофемашина',
  ];

  return (
    <div className="services">
      <p className="services-title">Услуги</p>
      <div className="services-checkbox">
        {sortBy.map((option, index) => (
          <span key={index} className="services-checkbox-span">
            <input
              className="services-checkbox-span-input"
              type="checkbox"
              onChange={() => onCheckBoxFirstChange(index)}
              checked={false}
            />
            {option}
          </span>
        ))}
      </div>
      <span onClick={() => resetSorts('availability')}>Cброс</span>
    </div>
  );
};
