import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../style.module.scss';
import useStore from '../../../../store/useStore';

interface MyParams {
  category: string;
  sort: string;
}

interface MyProps {
  resetSorts: Function;
}

export const Sort = ({ resetSorts }: MyProps) => {
  const setCheckSign = useStore((state) => state.setCheckSign);
  const setSignIndex = useStore((state) => state.setSignIndex);
  const checkSign = useStore((state) => state.checkSign);
  const opitionsSortedLink = useStore((state) => state.opitionsSortedLink);
  const pathname = usePathname();

  const ha = pathname?.split('/')[2];
  const category = pathname?.split('/')[3];
  const sort = pathname?.split('/')[4];

  const sortBy = [
    {
      option: 'Sorted-by-summer-season',
      name: 'По цене Летний сезон',
    },
    {
      option: 'Sorted-by-winter-season',
      name: 'По цене Зимний сезон ',
    },
    {
      option: 'Sorted-by-square-meters',
      name: 'По кв. м',
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
    setSignIndex(index);

    const sign = [...checkSign];

    if (sign[index]) {
      sign.splice(index, 1, false);

      setCheckSign(sign);
    } else {
      sign.splice(index, 1, true);
      setCheckSign(sign);
    }
  };

  return (
    <div className={styles.servicesSort}>
      <p className={styles.servicesSortTitle}>Сортировка</p>

      <div className={styles.servicesSortBox}>
        {sortBy.map((option, index) => (
          <Link
            href={`/Category/${ha}/${option.option}/${opitionsSortedLink}`}
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
