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
        more: 'Дороже',
        less: 'Дешевле',
      },
    },
    {
      option: 'Sorted-by-winter-season',
      name: 'По цене Зимний сезон ',
      ru: {
        more: 'Дороже',
        less: 'Дешевле',
      },
    },
    {
      option: 'Sorted-by-square-meters',
      name: 'По кв. м',
      ru: {
        more: 'Больше',
        less: 'Меньше',
      },
    },
    {
      option: 'Sorted-by-floor',
      name: 'По этажу',

      ru: {
        more: 'Выше',
        less: 'Ниже',
      },
    },
    {
      option: 'Sorted-by-number-of-rooms',
      name: 'По количеству комнат',
      ru: {
        more: 'Больше',
        less: 'Меньше',
      },
    },
    {
      option: 'Sorted-by-number-of-beds',
      name: 'По количеству мест',
      ru: {
        more: 'Больше',
        less: 'Меньше',
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

  const checkLink = !category || category !== 'Without-sort';

  return (
    <div className={styles.sort}>
      <p className={styles.sortTitle}>Сортировка</p>

      <div className={styles.sortBox}>
        {sortBy.map((option, index) => (
          <div
            className={styles.sortBoxInside}
            key={option.option}
            onMouseLeave={() => toggleDropdown(openDropdownIndex)}
          >
            <div
              className={`
                ${styles.sortBoxInsideOption} ${
                category?.split('+')[0] === option.option ? styles.sortBoxSelect : ''
              }`}
              onClick={() => toggleDropdown(index)}
            >
              {option.name}
            </div>

            {openDropdownIndex === index && (
              <div className={styles.sortBoxInsideDropDown}>
                <Link
                  href={`/Category/${ha}/${option.option}+more/${opitionsSortedLink}`}
                  className={
                    category?.split('+')[1] === 'more' && category?.split('+')[0] === option.option
                      ? styles.sortBoxInsideDropDownSelect
                      : ''
                  }
                  onClick={() => onHandleClick(index)}
                >
                  {option.ru.more}
                </Link>

                <Link
                  href={`/Category/${ha}/${option.option}+less/${opitionsSortedLink}`}
                  className={
                    category?.split('+')[1] === 'less' && category?.split('+')[0] === option.option
                      ? styles.sortBoxInsideDropDownSelect
                      : ''
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

      <div className={styles.sortDownBlock}>
        <span onClick={() => (checkLink ? resetSorts('sort') : '')}>Cброс</span>
      </div>
    </div>
  );
};
