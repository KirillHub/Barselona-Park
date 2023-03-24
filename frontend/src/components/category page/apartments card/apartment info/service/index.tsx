import { MyApartments } from "../../../../../types/type";
import { readyIcons } from "../../../../../helpers/functions/readyIcons";
import { serviceIcons } from "@/share/serviceIcons";
import styles from "../style.module.scss";
import { useState } from "react";

interface MyProps {
  apartment: MyApartments;
}

export const Service = ({ apartment }: MyProps) => {
  const service = serviceIcons();
  const icons = readyIcons(apartment, service);

  const [showService, setShowService] = useState(false);
  const [reset, setReset] = useState<NodeJS.Timeout>();
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

  if ((apartment.about.balcony = "С балконом")) {
    fixSpace += 1;
  }
  if (apartment.services.stove) {
    fixSpace += 1;
  }
  if (apartment.services.dishwasher) {
    fixSpace += 1;
  }
  if (apartment.services.coffeeMachine) {
    fixSpace += 1;
  }

  const showTitle = (iconIndex: number) => {
    clearTimeout(reset);
    setTitles(titles.map((title, index) => (index === iconIndex ? true : false)));

    const id = setTimeout(() => {
      setTitles(prev => prev.map((title, index) => (index === iconIndex ? false : false)));
    }, 2000);
    setReset(id);
  };

  return (
    <div className={styles.services}>
      <div className={styles.services__visibleIcons}>
        {icons.map((icon, index) =>
          index < 10 - fixSpace && icon.title !== "" ? (
            <div onClick={() => showTitle(index)} key={icon.title}>
              {icon.jsx}
              <span className={`${titles[index] ? "visible" : "hidden"}`}>{icon.title}</span>
            </div>
          ) : (
            ""
          )
        )}
      </div>

      <div
        className={styles.services__hiddenIcons}
        onClick={() => setShowService(true)}
        onMouseLeave={() => setShowService(false)}
      >
        <p>Все услуги</p>
        <div className={styles.services__allIcons + `${showService ? " visible" : " hidden"}`}>
          {icons.map((icon, index) =>
            index > 9 - fixSpace && icon.title !== "" ? (
              <div onClick={() => showTitle(index)} key={icon.title}>
                {icon.jsx}
                <span className={`${titles[index] ? "visible" : "hidden"}`}>{icon.title}</span>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
};
