import React from 'react';
import { usePathname } from 'next/navigation';
import { SelectCategory } from './select category';
import { CheckInCheckOut } from './search by date';
import { GuestsNights } from './guests nights';
import { BookingButton } from './booking button';

import styles from './style.module.scss';

export const Options = () => {
  const pathname = usePathname();

  const first = pathname?.split('/')[1];

  const checkCategory = first === 'Category';

  return (
    <div className={styles.options}>
      {checkCategory ? <SelectCategory /> : ''}
      <div className={styles.optionsBottom}>
        <CheckInCheckOut />
        <GuestsNights />
      </div>
      {!checkCategory ? <BookingButton /> : ''}
    </div>
  );
};
