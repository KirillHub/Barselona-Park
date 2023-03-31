import { motion } from "framer-motion";
import CheckInCheckOut from "@/components/category page/category interaction/options/interaction/search by date";
import Button from "@/share/components/button";
import Select from "@/share/components/select";
import styles from "./style.module.scss";

const SearchPanel = () => {
  const handleClick = () => {
    console.log("btn work");
  };

  return (
    <div className={styles.search_panel}>
      <motion.div
        className={styles.search_panel__body}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0, duration: 1 }}
      >
        <h2>Забронируйте проживание</h2>
        <h3>Приветствуем в Barselona Park - элитном отеле в Сочи на берегу моря</h3>

        <div className={styles.search_panel__search_panel}>
          <CheckInCheckOut />

          <div className={styles.search_panel__selectors}>
            <motion.div
              style={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            >
              <div className={styles.search_panel__inputs_wrapper}>
                <div className={styles.search_panel__inputs_title}>Взрослых</div>
                <Select defaultValue='Взрослых' col={9} className={styles.select} />
              </div>
            </motion.div>

            <motion.div
              style={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, delay: 1 }}
            >
              <div className={styles.search_panel__inputs_wrapper}>
                <div className={styles.search_panel__inputs_title}>Детей</div>
                <Select defaultValue='Детей' col={5} className={styles.select} />
              </div>
            </motion.div>

            <motion.div
              style={{ scale: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, delay: 1.5 }}
            >
              <Button onClick={handleClick}>
                Найти
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SearchPanel;
