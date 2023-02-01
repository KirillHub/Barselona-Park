import { useEffect } from 'react';
// import { useAppDispatch, useAppSelector } from '../../../store/store';
// import { setOpitionsSortedLink, setCheckBox } from '../../../store/category/slice';
// import { useParams, useNavigate } from 'react-router-dom';

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

import { Sort } from './sort';
import { Options } from './options';

import './style.scss';
import { SelectCategory } from './select category';

interface MyParams {
  category: string;
  sort: string;
  options: string;
}

export const CategoryInteraction = () => {
  // const dispatch = useAppDispatch();
  // const categoryPage = useAppSelector((state) => state.categoryPage);

  const pathname = usePathname();

  const category = pathname?.split('/')[2];
  const sort = pathname?.split('/')[3];
  const options = pathname?.split('/')[4];

  // const { category, sort, options } = useParams<keyof MyParams>() as MyParams;

  const router = useRouter();

  // const checkBox = [...categoryPage.checkBox];

  const checkBox = [false, false, false, false, false, false];

  const checkOpitionsLink = () => {
    let opitionsLink = [];

    if (checkBox[0]) {
      opitionsLink.push('sea-view');
    }
    if (checkBox[1]) {
      opitionsLink.push('city-view');
    }
    if (checkBox[2]) {
      opitionsLink.push('balcony');
    }
    if (checkBox[3]) {
      opitionsLink.push('oven');
    }
    if (checkBox[4]) {
      opitionsLink.push('dishwasher');
    }
    if (checkBox[5]) {
      opitionsLink.push('coffee-machine');
    }

    const savedLink = opitionsLink.join('+');

    const newSavedLink = savedLink !== undefined ? savedLink : '';
    // dispatch(setOpitionsSortedLink(newSavedLink.length !== 0 ? `/${newSavedLink}` : ''));

    return savedLink !== undefined ? savedLink : '';
  };

  const onCheckBoxFirstChange = (checkBoxIndex: number) => {
    const box = checkBox;

    if (checkBoxIndex === 0 || checkBoxIndex === 1) {
      if (!box[0] && !box[1]) {
        box.splice(checkBoxIndex, 1, true);
        // dispatch(setCheckBox([...box]));
      } else if (box[0]) {
        if (checkBoxIndex === 0) {
          box.splice(0, 1, false);
        } else {
          box.splice(0, 2, false, true);
        }
        // dispatch(setCheckBox([...box]));
      } else {
        if (checkBoxIndex === 1) {
          box.splice(1, 1, false);
        } else {
          box.splice(0, 2, true, false);
        }
        // dispatch(setCheckBox([...box]));
      }
    } else {
      if (checkBox[checkBoxIndex]) {
        box.splice(checkBoxIndex, 1, false);

        // dispatch(setCheckBox([...box]));
      } else {
        box.splice(checkBoxIndex, 1, true);

        // dispatch(setCheckBox([...box]));
      }
    }

    return changeRoute();
  };

  const changeRoute = () => {
    const opitionsLink = checkOpitionsLink();

    const sorted = sort === undefined ? '' : sort;

    let newRoute = '';

    if (sorted.length !== 0 && sorted !== 'Without-sort' && opitionsLink.length === 0) {
      newRoute = `/${sorted}`;
    }

    if ((sorted.length === 0 || sorted === 'Without-sort') && opitionsLink.length === 0) {
      newRoute = '';
    }

    if (sorted.length !== 0 && opitionsLink.length !== 0) {
      newRoute = `/${sorted}/${opitionsLink}`;
    }

    if (sorted.length === 0 && opitionsLink.length !== 0) {
      newRoute = `/Without-sort/${opitionsLink}`;
    }

    router.push(`/Category/${category}${newRoute}`);
  };

  const resetSorts = (whatsReset: string) => {
    const sorted = sort === undefined ? '' : sort;

    if (whatsReset === 'availability') {
      // dispatch(setCheckBox([false, false, false, false, false, false]));
      // dispatch(setOpitionsSortedLink(''));

      if (sorted.length !== 0 && sorted !== 'Without-sort') {
        router.push(`/Category/${category}/${sorted}`);
      } else {
        router.push(`/Category/${category}`);
      }
    } else {
      const opitionsLink = checkOpitionsLink();
      if (sorted.length !== 0 && sorted !== 'Without-sort' && opitionsLink.length !== 0) {
        router.push(`/Category/${category}/Without-sort/${opitionsLink}`);
      }
      if (sorted.length !== 0 && sorted !== 'Without-sort' && opitionsLink.length === 0) {
        router.push(`/Category/${category}`);
      }
    }
  };

  const firstRender = () => {
    if (options !== undefined) {
      const opitionsLink = options.split('+');
      const newOpitionsLink = [
        'sea-view',
        'city-view',
        'balcony',
        'oven',
        'dishwasher',
        'coffee-machine',
      ];

      const updateOpitionsLink = newOpitionsLink
        .map((d, i) => opitionsLink.findIndex((x) => x === d))
        .map((x) => x !== -1);

      // dispatch(setCheckBox(updateOpitionsLink));
    }
  };

  useEffect(() => {
    firstRender();
  }, []);

  return (
    <div className="category-page-container__sorting">
      <Sort resetSorts={resetSorts} />

      <Options onCheckBoxFirstChange={onCheckBoxFirstChange} resetSorts={resetSorts} />

      <SelectCategory />
    </div>
  );
};
