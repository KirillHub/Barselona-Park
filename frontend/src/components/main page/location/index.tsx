import Map from "../../../share/components/map";
import styles from "./style.module.scss";

const Location = () => {
  return (
    <div className={styles.location}>
      <div className={styles.location__text_body}>
        <div style={{ color: "red", fontSize: '2em', marginBottom: '1.6em' }}>Ещё любая инфа</div>

        <h2>Курортный пр., 59, Сочи, Краснодарский край</h2>

        <h3>Телефон: +7 (988) 130-62-17</h3>
        <h3>Email: barselona_park@mail.ru</h3>
      </div>
      <Map />
    </div>
  );
};

export default Location;
