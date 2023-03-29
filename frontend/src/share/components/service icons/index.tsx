import { AllIcons } from "@/share/allicons";
import styles from "./style.module.scss";

const ServiceIcons = () => {
  const icons = AllIcons();

  return (
    <div className={styles.service}>
      <h2>Услуги</h2>
      <div className={styles.service__icons}>
        {icons.map((icon, _) => (
          <div key={icon.title} className={styles.service__icons_icon}>
            <div>{icon.jsx}</div>
            <span>{icon.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceIcons;
