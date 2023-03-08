import { useCallback, useEffect, useState } from 'react';
import useStore from '../../../store/useStore';

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

import { Sort } from './sort';
import { Services } from './services';

import styles from './style.module.scss';
import { Options } from './options';

import { CategoryMenu } from '../../../svg';

interface MyParams {
  category: string;
  sort: string;
  options: string;
}

export const CategoryInteraction = () => {
  const setCheckBox = useStore((state) => state.setCheckBox);
  const setOpitionsSortedLink = useStore((state) => state.setOpitionsSortedLink);

  const opitionsSortedLink = useStore((state) => state.opitionsSortedLink);
  const checkBox = useStore((state) => [...state.checkBox]);

  const pathname = usePathname();

  const category = pathname?.split('/')[2];
  const sort = pathname?.split('/')[3];
  const service = pathname?.split('/')[4];

  const router = useRouter();

  const [sideBar, setSideBar] = useState(false);

  const getOptionsLink = () => {
    const optionLabels = ['sea-view', 'city-view', 'balcony', 'oven', 'dishwasher', 'coffee-machine'];

    const selectedOptions = optionLabels.filter((option, index) => checkBox[index]);

    return selectedOptions.join('+');
  };

  const checkOpitionsLink = () => {
    const savedLink = getOptionsLink();
    const newSavedLink = savedLink || '';
    setOpitionsSortedLink(newSavedLink ? `/${newSavedLink}` : '');

    return savedLink;
  };

  const updateCheckBox = (index: number, value: boolean) => {
    const newState = checkBox;
    newState[index] = value;

    setCheckBox(newState);
  };

  const onCheckBoxFirstChange = (checkBoxIndex: number) => {
    if (checkBoxIndex === 0 || checkBoxIndex === 1) {
      const shouldSetFirstCheckbox = !checkBox[0] && !checkBox[1];
      if (shouldSetFirstCheckbox) {
        updateCheckBox(checkBoxIndex, true);
      } else if (checkBox[0]) {
        if (checkBoxIndex === 0) {
          updateCheckBox(0, false);
        } else {
          updateCheckBox(0, false);
          updateCheckBox(1, true);
        }
      } else {
        if (checkBoxIndex === 1) {
          updateCheckBox(1, false);
        } else {
          updateCheckBox(0, true);
          updateCheckBox(1, false);
        }
      }
    } else {
      updateCheckBox(checkBoxIndex, !checkBox[checkBoxIndex]);
    }

    return changeRoute();
  };

  // const ob = {
  //   'Sorted-by-summer-season': { more: false, less: false },
  //   'Sorted-by-winter-season': { more: false, less: false },
  //   'Sorted-by-number-of-rooms': { more: false, less: false },
  //   'Sorted-by-number-of-beds': { more: false, less: false },
  //   'Sorted-by-square-meters': { more: false, less: false },
  //   'Sorted-by-floor': { more: false, less: false },
  // };

  const changeRoute = () => {
    const opitionsLink = checkOpitionsLink();
    const sorted = sort || '';

    let newRoute = '';

    if (opitionsLink.length === 0) {
      newRoute = sorted === 'Without-sort' ? '' : `/${sorted}`;
    } else if (sorted.length === 0) {
      newRoute = `/Without-sort/${opitionsLink}`;
    } else {
      newRoute = `/${sorted}/${opitionsLink}`;
    }

    router.push(`/Category/${category}${newRoute}`);
  };

  const resetSorts = (whatsReset: string) => {
    const sorted = sort ?? '';

    if (whatsReset === 'availability') {
      setCheckBox([false, false, false, false, false, false]);
      setOpitionsSortedLink('');

      const newSortPath = sorted.length !== 0 && sorted !== 'Without-sort' ? `/${sorted}` : '';
      router.push(`/Category/${category}${newSortPath}`);
    } else {
      const opitionsLink = checkOpitionsLink();

      const newSortPath =
        sorted.length !== 0 && sorted !== 'Without-sort' && opitionsLink.length !== 0
          ? `/Without-sort/${opitionsLink}`
          : '';

      router.push(`/Category/${category}${newSortPath}`);
    }
  };

  const firstRender = useCallback(() => {
    if (service) {
      const newOpitionsLink = [
        'sea-view',
        'city-view',
        'balcony',
        'oven',
        'dishwasher',
        'coffee-machine',
      ];
      const updateOpitionsLink = newOpitionsLink.map((d) => service.includes(d));
      setCheckBox(updateOpitionsLink);
    }
  }, [service, setCheckBox]);

  useEffect(() => {
    firstRender();
  }, [firstRender]);

  return (
    <>
      <div className={styles.categoryOpen} onClick={() => setSideBar(!sideBar)}>
        <CategoryMenu color={sideBar} />
      </div>

      <aside className={sideBar ? styles.active : styles.categoryContainer}>
        <Options />

        <Services onCheckBoxFirstChange={onCheckBoxFirstChange} resetSorts={resetSorts} />

         <Sort resetSorts={resetSorts} />
      </aside>
    </>
  );
};
