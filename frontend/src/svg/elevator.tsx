import styles from "./style.module.scss";

export const Elevator = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg}
      viewBox="0 0 512 512"
    >
      <path fill="#EDEDED" d="M46 9h420v494H46z" />
      <path fill="#DBDBDB" d="M256 9h210v494H256zM145 157h111v346H145z" />
      <path fill="#CCCCCE" d="M256 157h111v346H256z" />
      <path fill="#EFC27B" d="M231 59h50v49h-50z" />
      <path
        fill="#ECB45C"
        d="M256 59h25v49h-25zm160 268a15 15 0 1 1 0-31 15 15 0 0 1 0 31z"
      />
      <path fill="#C5C5CA" d="M416 376a15 15 0 1 1 0-31 15 15 0 0 1 0 31z" />
      <g fill="#2E2D31">
        <path d="M490 493h-15V9a9 9 0 0 0-9-9H46a9 9 0 0 0-9 9v484H22a9 9 0 0 0-10 10 9 9 0 0 0 10 9h468a9 9 0 0 0 10-9 9 9 0 0 0-10-10zm-336 0V167h93v326h-93zm111 0V167h93v326h-93zm111 0V157a9 9 0 0 0-9-9H145a9 9 0 0 0-9 9v336H56V19h400v474h-80z" />
        <path d="M281 49h-50a9 9 0 0 0-9 10v49a9 9 0 0 0 9 9h50a9 9 0 0 0 9-9V59a9 9 0 0 0-9-10zm-10 50h-30V68h30v31z" />
      </g>
    </svg>
  );
};
