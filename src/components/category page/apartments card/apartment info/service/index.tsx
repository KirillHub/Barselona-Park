import { useState } from 'react';
import { readyIcons } from '../../../../functions/readyIcons';
import { Apartment } from '../../../../types/type';
import styles from '../style.module.scss';

interface MyProps {
  apartment: Apartment;
}

export const Service = ({ apartment }: MyProps) => {
  const icons = readyIcons(apartment);

  const [showService, setShowService] = useState(false);
  const [titles, setTitles] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  let fixSpace = 1;

  if (apartment.balcony) {
    fixSpace += 1;
  }
  if (apartment.oven) {
    fixSpace += 1;
  }
  if (apartment.dishwasher) {
    fixSpace += 1;
  }
  if (apartment.coffeeMachine) {
    fixSpace += 1;
  }

  const showTitle = (iconIndex: number) => {
    setTitles(titles.map((title, index) => (index === iconIndex ? true : title)));

    const id = setTimeout(() => {
      setTitles((prev) => prev.map((title, index) => (index === iconIndex ? false : title)));
    }, 1000);
  };

  return (
    <div className={styles.infoService}>
      <div className={styles.infoServiceShownIcons}>
        {icons.map((icon, index) =>
          index < 10 - fixSpace && icon.title !== '' ? (
            <div onClick={() => showTitle(index)} key={icon.title}>
              {icon.jsx}
              <span className={`${titles[index] ? styles.visible : styles.hidden}`}>{icon.title}</span>
            </div>
          ) : (
            ''
          ),
        )}
      </div>

      <div
        className={styles.infoServiceAll}
        onClick={() => setShowService(true)}
        onMouseLeave={() => setShowService(false)}>
        <p>Все услуги</p>
        <div
          className={
            styles.infoServiceAllIcons + ' ' + `${showService ? styles.visible : styles.hidden}`
          }>
          {icons.map((icon, index) =>
            index > 9 - fixSpace && icon.title !== '' ? (
              <div onClick={() => showTitle(index)} key={icon.title}>
                {icon.jsx}
                <span className={`${titles[index] ? styles.visible : styles.hidden}`}>{icon.title}</span>
              </div>
            ) : (
              ''
            ),
          )}
        </div>
      </div>
    </div>
  );
};
