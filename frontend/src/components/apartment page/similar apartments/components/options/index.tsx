import styles from "../../style.module.scss";
import useStore from "@/store/useStore";

export const SimilarOptions = () => {
  const setSimilarOptions = useStore((state) => state.setSimilarOptions);

  return (
    <div className={styles.similar__options}>
      <button onClick={() => setSimilarOptions("price")}>Пожие по цене</button>
      <button onClick={() => setSimilarOptions("services")}>
        Пожие по услугам
      </button>
      <button onClick={() => setSimilarOptions("rooms")}>
        Пожие по количеству комнат
      </button>
      <button onClick={() => setSimilarOptions("floor")}>Пожие по этажу</button>
    </div>
  );
};
 