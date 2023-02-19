import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../style.module.scss';

interface MyParams {
  category: string;
  sort: string;
}

interface MyProps {
  resetSorts: Function;
}

export const Sort = ({ resetSorts }: MyProps) => {

  const pathname = usePathname();

  const category = pathname?.split('/')[3];
  const sort = pathname?.split('/')[4];

  const sortBy = [
    {
      option: 'Sorted-by-summer-season',
      name: 'По цене Летний сезон',
    },
    {
      option: 'Sorted-by-square-meters',
      name: 'По кв. м',
    },
    {
      option: 'Sorted-by-winter-season',
      name: 'По цене Зимний сезон ',
    },
    {
      option: 'Sorted-by-floor',
      name: 'По этажу',
    },
    {
      option: 'Sorted-by-number-of-rooms',
      name: 'По количеству комнат',
    },

    {
      option: 'Sorted-by-number-of-beds',
      name: 'По количеству мест',
    },
  ];

  const onHandleClick = (index: number) => {
    // dispatch(setCheckSign(index));
  };

  return (
    <div className={styles.servicesSort}>
      <p className={styles.servicesSortTitle}>Сортировка</p>

      <div className={styles.servicesSortBox}>
        {sortBy.map((option, index) => (
          <Link
            href={`/Category/${category}/${option.option}${'categoryPage.opitionsSortedLink'}`}
            className={styles.servicesSortBoxOption}
            onClick={() => onHandleClick(index)}
            key={index}
          >{`⇵ ${option.name} `}</Link>
        ))}
      </div>
      
      <div className={styles.servicesSortDownBlock}>
        <span>Применить</span>
        <span onClick={() => resetSorts('sort')}>Cброс</span>
      </div>
    </div>
  );
};

//{`${option.name} ${categoryPage.checkSign[index] ? '<' : '>'}`}
