import { useState } from 'react';
import useStore from '../../../../../store/useStore';
import { More } from '../../../../../svg';
import styles from '../style.module.scss';

export const GuestsNights = () => {
  return (
    <>
      <div className={styles.box}>
        <p className={styles.boxTitle}>Люди</p>

        <div className={styles.boxDate}>
          <span className={styles.boxDateNumber}>{1}</span>

          <div>
            <div className={styles.optionsIcon + ' ' + styles.IconWrap} onClick={() => ''}>
              <More />
            </div>

            <div className={styles.optionsIcon} onClick={() => ''}>
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
