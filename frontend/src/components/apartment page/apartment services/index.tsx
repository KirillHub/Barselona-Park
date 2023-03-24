import { ReactNode } from "react";
import styles from "../style.module.scss";

interface MyProps {
  services: {
    jsx: ReactNode;
    title: string;
  }[];
}

export const ApartmentServices = ({ services }: MyProps) => {
  return (
    <div className={styles.apartment__services}>
      <h3>Удобства и услуги</h3>
      <div className={styles.apartment__services_icons}>
        {services!?.map(service =>
          service!?.title!?.length > 0 ? (
            <div className={styles.apartment__services_icon} key={service?.title}>
              <div>{service?.jsx}</div>
              <span>{service?.title}</span>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};
