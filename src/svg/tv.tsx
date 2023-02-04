import styles from './style.module.scss';
export const Tv = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={styles.svg} viewBox="0 0 512 512">
      <path fill="#434A54" d="M171 398h170v36H171z" />
      <path fill="#656D78" d="M384 427H128a11 11 0 0 0 0 21h256a11 11 0 0 0 0-21z" />
      <path
        fill="#5D9CEC"
        d="M21 395c-6 0-10-5-10-11V85c0-6 4-10 10-10h470c6 0 10 4 10 10v299c0 6-4 11-10 11H21z"
      />
      <g fill="#656D78">
        <path d="M491 64H21C10 64 0 74 0 85v299c0 12 10 21 21 21h470c11 0 21-9 21-21V85c0-11-10-21-21-21zm0 320H21V85h470v299z" />
        <path d="M21 341h482v46H21z" />
      </g>
      <path fill="#AAB2BC" d="M267 373a11 11 0 1 1-22 0 11 11 0 0 1 22 0z" />
      <path fill="#FFF" d="M360 341h-83l64-256h83z" opacity=".1" />
    </svg>
  );
};
