import styles from "./style.module.scss";

export const Sun = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.newSvg}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="white"
        fillRule="evenodd"
        d="M8 12a4 4 0 118 0 4 4 0 01-8 0zm4-10a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm7.7 2.3a1 1 0 010 1.4l-2 2a1 1 0 11-1.4-1.4l2-2a1 1 0 011.4 0zM18 12a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zm-1.7 4.3a1 1 0 011.4 0l2 2a1 1 0 01-1.4 1.4l-2-2a1 1 0 010-1.4zM12 18a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zm-4.3-1.7a1 1 0 010 1.4l-2 2a1 1 0 01-1.4-1.4l2-2a1 1 0 011.4 0zM2 12a1 1 0 011-1h2a1 1 0 110 2H3a1 1 0 01-1-1zm2.3-7.7a1 1 0 011.4 0l2 2a1 1 0 01-1.4 1.4l-2-2a1 1 0 010-1.4z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
