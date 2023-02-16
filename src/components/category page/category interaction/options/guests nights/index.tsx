import { useState } from 'react';
import { More } from '../../../../../svg';
import styles from '../style.module.scss';

export const GuestsNights = () => {
  const [guests, setGuests] = useState(1);

  const onClickGuests = (action: string) => {
    if ((guests === 1 && action === 'minus') || (guests === 8 && action === 'plus')) {
      return;
    } else if (action === 'plus') {
      setGuests(guests + 1);
    } else {
      setGuests(guests - 1);
    }
  };

  return (
    <>
      <div className={styles.box}>
        <p className={styles.boxTitle}>Люди</p>

        <div className={styles.boxDate}>
          <span className={styles.boxDateNumber}>{guests}</span>

          <div>
            <div
              className={styles.optionsIcon + ' ' + styles.IconWrap}
              onClick={() => onClickGuests('plus')}>
              <More />
            </div>

            <div className={styles.optionsIcon} onClick={() => onClickGuests('minus')}>
              <More />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.box}>
        <p className={styles.boxTitle}>Ночей</p>
        <div className={styles.boxDate}>
          <span className={styles.boxNights}>{365}</span>
        </div>
      </div>
    </>
  );
};
