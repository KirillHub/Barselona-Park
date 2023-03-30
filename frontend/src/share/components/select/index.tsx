import styles from "./style.module.scss";

type SelectOptions = {
  defaultValue: string;
  col: number;
  className?: string;
};

const Select = ({ defaultValue, col, className }: SelectOptions) => {
  return (
    <select className={className ? [className, styles.select].join(" ") : styles.select}>
      <option defaultValue={defaultValue} disabled>
        {defaultValue}
      </option>
      {Array.from({ length: col }, (_, index) => (
        <option value={index} key={index}>
          {index}
        </option>
      ))}
    </select>
  );
};

export default Select;
