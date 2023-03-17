import styles from "./style.module.scss";

export const Refrigerator = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg}
      viewBox="0 0 512 512"
    >
      <path
        fill="#434A54"
        d="M149 501a11 11 0 1 1-21 0 11 11 0 0 1 21 0zm235 0a11 11 0 1 1-21 0 11 11 0 0 1 21 0z"
      />
      <path
        fill="#A0D468"
        d="M395 0H117c-6 0-10 5-10 11v480c0 6 4 10 10 10h278c6 0 10-4 10-10V11c0-6-4-11-10-11z"
      />
      <path fill="#8CC153" d="M107 256h298v21H107z" />
      <path
        fill="#E6E9ED"
        d="M139 171h-32v21h21v149h-21v22h32c6 0 10-5 10-11V181c0-6-4-10-10-10z"
      />
      <path
        fill="#FFF"
        d="M395 0h-22c6 0 11 5 11 11v480c0 6-5 10-11 10h22c6 0 10-4 10-10V11c0-6-4-11-10-11z"
        opacity=".2"
      />
    </svg>
  );
};
