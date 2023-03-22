import styles from "../../style.module.scss";
import useStore from "@/store/useStore";

export const SimilarOptions = () => {
  const setSimilarOptions = useStore((state) => state.setSimilarOptions);
  const similarOptions = useStore((state) => state.similarOptions);


  const optionsHandler = (option: string) => {
    if (similarOptions !== option) {
      setSimilarOptions(option);
    }
  };

  return (
    <div className={styles.similar__options}>
      <button onClick={() => optionsHandler("price")}>Пожие по цене</button>
      <button onClick={() => optionsHandler("services")}>
        Пожие по услугам
      </button>
      <button onClick={() => optionsHandler("rooms")}>
        Пожие по числу комнат
      </button>
      <button onClick={() => optionsHandler("floor")}>Пожие по этажу</button>
    </div>
  );
};
