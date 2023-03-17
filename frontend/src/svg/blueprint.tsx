import styles from "./style.module.scss";
export const Blueprint = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.newSvg}
      viewBox="0 0 1024 1024"
    >
      <path
        fill="white"
        d="M658 325V95H388v42h229v375h-84v42h209v-42h-84V366h230v521H658V700h-41v187H138V554h145v-42H138V137h145V95H96v834h833V325z"
      ></path>
      <path
        fill="grey"
        d="M825 408v417H658v62h230V408zM554 825H138v62h479V741h-63zm0-646h63v333h-63z"
      ></path>
    </svg>
  );
};
