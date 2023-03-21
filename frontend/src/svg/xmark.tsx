import styles from "./style.module.scss";

export const Xmark = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      className={styles.svg}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#fff"
        d="M6.7 4.6a1 1 0 00-1.4 0l-.7.7a1 1 0 000 1.4L9.9 12l-5.3 5.3a1 1 0 000 1.4l.7.7c.4.4 1 .4 1.4 0l5.3-5.3 5.3 5.3c.4.4 1 .4 1.4 0l.7-.7c.4-.4.4-1 0-1.4L14.1 12l5.3-5.3c.4-.4.4-1 0-1.4l-.7-.7a1 1 0 00-1.4 0L12 9.9 6.7 4.6z"
      ></path>
    </svg>
  );
};
