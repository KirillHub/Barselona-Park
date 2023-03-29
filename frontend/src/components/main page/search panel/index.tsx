import CheckInCheckOut from "@/components/category page/category interaction/options/interaction/search by date";
import Button from "@/share/components/button";
import Select from "@/share/components/select";
import styles from "./style.module.scss";

export const SearhPanel = () => {
  const handleClick = () => {
    console.log("btn work");
  };

  return (
    <div className={styles.search_panel}>
      <div className={styles.search_panel__body}>
        <h2>Забронируйте проживание</h2>
        <h3>Приветствуем в Barselona Park - элитном отеле в Сочи на берегу моря</h3>

        <div className={styles.search_panel__search_panel}>
          <CheckInCheckOut />

          <div className={styles.search_panel__selectors}>
            <div className={styles.search_panel__inputs_wrapper}>
              <div className={styles.search_panel__inputs_title}>Взрослых</div>
              <Select defaultValue='Взрослых' col={9} className={styles.select} />
            </div>

            <div className={styles.search_panel__inputs_wrapper}>
              <div className={styles.search_panel__inputs_title}>Детей</div>
              <Select defaultValue='Детей' col={5} className={styles.select} />
            </div>

            <Button onClick={handleClick}>Найти</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
