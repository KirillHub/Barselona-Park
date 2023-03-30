import { Telegram, Whatsapp } from "@/svg";
import Map from "../../../share/components/map";
import styles from "./style.module.scss";

const Location = () => {
  return (
    <div className={styles.location}>
      <div className={styles.location__text_body}>
        <h2>Курортный пр., 59, Сочи, Краснодарский край</h2>

        <h3>Телефон: +7 (988) 130-62-17</h3>
        <h3>Email: barselona_park@mail.ru</h3>

        <div className={styles.location__social}>
          <p>Социальные сети</p>
          <a className={styles.location__social_icon} href='https://wa.me/+79881306217'>
            <Whatsapp />
          </a>
          <a className={styles.location__social_icon} href='https://t.me/+79881306217'>
            <Telegram />
          </a>
        </div>
      </div>
      <Map />
    </div>
  );
};

export default Location;
