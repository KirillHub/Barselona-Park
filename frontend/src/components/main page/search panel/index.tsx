import styles from "./style.module.scss";

export const SearhPanel = () => {
  return (
    <div className={styles.search_panel}>
      <div className={styles.search_panel__body}>
        <h2 style={{ margin: 0, fontWeight: 700 }}>Забронируйте проживание</h2>
        <h3>Приветствуем в Barselona Park - элитном отеле в Сочи на берегу моря</h3>

        <div style={{ color: "red" }}>...implement logic...</div>
      </div>
    </div>
  );
};
