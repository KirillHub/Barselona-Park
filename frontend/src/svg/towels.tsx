import styles from './style.module.scss';

export const Towels = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={styles.svg} viewBox="0 0 512 512">
      <path fill="#C8546F" d="M464 96a40 40 0 1 0 0-80L88 15a80 80 0 0 0 0 161l376-1a40 40 0 0 0 0-80" />
      <path
        fill="#9B4573"
        d="M102 95a17 17 0 0 1 0-33h375a17 17 0 0 1 0 33H102zm362 322a40 40 0 0 0 0-80l-376-1a80 80 0 0 0 0 161l376-1a40 40 0 1 0 0-80"
      />
      <path fill="#C8546F" d="M102 416a17 17 0 0 1 0-33h375a17 17 0 0 1 0 33H102z" />
      <path fill="#FEC986" d="M48 256a40 40 0 0 0 0 80l376 1a80 80 0 0 0 0-161H48a40 40 0 0 0 0 80" />
      <path fill="#FEB860" d="M411 223a17 17 0 0 1 0 33H36a17 17 0 1 1 0-33h375z" />
      <path
        fill="#1D1D1B"
        d="M512 136c0-17-9-32-22-40a48 48 0 0 0-26-88H88a88 88 0 0 0-49 161 48 48 0 0 0-17 87 48 48 0 0 0 17 87 88 88 0 0 0 49 161h376a48 48 0 0 0 26-88 48 48 0 0 0-17-87 88 88 0 0 0 0-146c22-4 39-24 39-47zm-44 288c16 2 28 15 28 32 0 18-14 32-32 32H88a72 72 0 0 1 0-144h376a32 32 0 0 1 3 65l-363-1a8 8 0 0 1 0-16v-16a24 24 0 0 0 0 48h364zm-60-160a24 24 0 0 0 0-48v16a8 8 0 0 1 0 16H46a32 32 0 0 1 2-64h376a72 72 0 0 1 0 144H48a32 32 0 0 1-3-64h363zm59-160a32 32 0 0 1-3 64H88a72 72 0 0 1 0-144h376a32 32 0 0 1 2 64H104a8 8 0 0 1 0-16V56a24 24 0 0 0 0 48h363z"
      />
    </svg>
  );
};