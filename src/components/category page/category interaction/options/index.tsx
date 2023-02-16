import React from 'react';
import { CheckInCheckOut } from './search by date';
import { GuestsNights } from './guests nights';
import { SelectCategory } from './select category';
import styles from './style.module.scss';

export const Options = () => {
  return (
    <div className={styles.options}>
      <SelectCategory />
      <div className={styles.optionsBottom}>
        <CheckInCheckOut />
        <GuestsNights />
      </div>
    </div>
  );
};
