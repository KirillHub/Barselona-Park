import styles from "./style.module.scss";

export const Parking = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg}
      viewBox="0 0 512 512"
    >
      <path
        fill="#F2F2F2"
        d="M467 6H45C24 6 6 24 6 45v422c0 21 18 39 39 39h422c21 0 39-18 39-39V45c0-21-18-39-39-39z"
      />
      <g fill="#47A7DD">
        <path d="M467 512H45c-25 0-45-20-45-45V45C0 20 20 0 45 0h422c25 0 45 20 45 45v422c0 25-20 45-45 45zM45 13c-18 0-32 14-32 32v422c0 18 14 32 32 32h422c18 0 32-14 32-32V45c0-18-14-32-32-32H45z" />
        <path d="M58 58h396v396H58z" />
      </g>
      <path
        fill="#6AC7EF"
        d="M371 58 117 454H58v-82L260 58zm83 0v51L233 454h-58L428 58z"
      />
      <path
        fill="#F2F2F2"
        d="M264 109h-81v294h66v-84h15a105 105 0 1 0 0-210zm44 105c0 26-21 47-47 47h-12v-95h12c26 0 47 21 47 48z"
      />
    </svg>
  );
};
