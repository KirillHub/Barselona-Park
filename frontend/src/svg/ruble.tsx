import styles from './style.module.scss';

export const Ruble = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={styles.newSvg} viewBox="0 0 64 64">
      <path
        fill="#23a123"
        stroke="#4c241d"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M38 44H2V20h54v24h-9"></path>
      <circle cx="29" cy="32" r="9" fill="#ffec95"></circle>
      <path
        fill="none"
        stroke="#4c241d"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 23h-7a5 5 0 01-5 5v7"></path>
      <circle cx="6" cy="24" r="1" fill="#4c241d"></circle>
      <circle
        cx="52"
        cy="47"
        r="10"
        fill="#ffce56"
        stroke="#4c241d"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"></circle>
      <circle
        cx="52"
        cy="47"
        r="7"
        fill="none"
        stroke="#ffec95"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"></circle>
      <path
        fill="none"
        stroke="#4c241d"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M27 37V27h4a3 3 0 012 3h0a3 3 0 01-2 2h-6m0 3h6"></path>
    </svg>
  );
};
