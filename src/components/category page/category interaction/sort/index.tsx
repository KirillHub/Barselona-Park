import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../style.module.scss';
import useStore from '../../../../store/useStore';
import { useState } from 'react';

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

  const ha = pathname?.split('/')[2];
  const category = pathname?.split('/')[3];
  const sort = pathname?.split('/')[4];

  const sortBy = [
    {
      option: 'Sorted-by-summer-season',
      name: 'По цене Летний сезон',
      ru: {
        more: 'дороже',
        less: 'дешевле',
      },
      eng: {
        more: 'expensive',
        less: 'cheaper',
      },
    },
    {
      option: 'Sorted-by-winter-season',
      name: 'По цене Зимний сезон ',
      ru: {
        more: 'дороже',
        less: 'дешевле',
      },
      eng: {
        more: 'expensive',
        less: 'cheaper',
      },
    },
    {
      option: 'Sorted-by-square-meters',
      name: 'По кв. м',
      ru: {
        more: 'Больше',
        less: 'Меньше',
      },
      eng: {
        more: 'more',
        less: 'less',
      },
    },
    {
      option: 'Sorted-by-floor',
      name: 'По этажу',

      ru: {
        more: 'Выше',
        less: 'Ниже',
      },
      eng: {
        more: 'higher',
        less: 'lower',
      },
    },
    {
      option: 'Sorted-by-number-of-rooms',
      name: 'По количеству комнат',
      ru: {
        more: 'Больше',
        less: 'Меньше',
      },
      eng: {
        more: 'more',
        less: 'less',
      },
    },
    {
      option: 'Sorted-by-number-of-beds',
      name: 'По количеству мест',
      ru: {
        more: 'Больше',
        less: 'Меньше',
      },
      eng: {
        more: 'more',
        less: 'less',
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

  return (
    <div className={styles.servicesSort}>
      <p className={styles.servicesSortTitle}>Сортировка</p>

      <div className={styles.servicesSortBox}>
        {sortBy.map((option, index) => (
          <div key={option.option} className="dropdown">
            <div className="dropdown-header" onClick={() => toggleDropdown(index)}>
              {option.name}
            </div>
            {openDropdownIndex === index && (
              <div className="dropdown-menu">
                <div className="dropdown-item">{option.ru.more}</div>
                <div className="dropdown-item">{option.ru.less}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={styles.servicesSortDownBlock}>
        <span>Применить</span>
        <span onClick={() => resetSorts('sort')}>Cброс</span>
      </div>
    </div>
  );
};
