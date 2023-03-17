import styles from "./style.module.scss";

interface MyProps {
  color: boolean;
}

export const CategoryMenu = ({ color }: MyProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.categoryButton}
      viewBox="0 0 24 24"
    >
      <g fill="none" fillRule="evenodd">
        <path d="M24 0v24H0V0h24zM12.6 23.3h-.2v.5h.2v-.5zm.3-.2l-.2.1v.5l.2.1v-.6zm-.8 0v.7h.2v-.5l-.2-.2z"></path>
        <path
          fill="white"
          d="M18 4a1 1 0 10-2 0v1H4a1 1 0 000 2h12v1a1 1 0 102 0V7h2a1 1 0 100-2h-2V4zM4 11a1 1 0 100 2h2v1a1 1 0 102 0v-1h12a1 1 0 100-2H8v-1a1 1 0 00-2 0v1H4zm-1 7c0-.6.4-1 1-1h12v-1a1 1 0 112 0v1h2a1 1 0 110 2h-2v1a1 1 0 11-2 0v-1H4a1 1 0 01-1-1z"
        ></path>
      </g>
    </svg>
  );
};
