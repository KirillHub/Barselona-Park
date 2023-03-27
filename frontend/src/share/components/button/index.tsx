import styles from "./style.module.scss";

const Button = (props: any) => {
  return (
    <div
      {...props}
      className={props?.className ? [props.className, styles.btn].join(" ") : styles.btn}
    ></div>
  );
};

export default Button;
