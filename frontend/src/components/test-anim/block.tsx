import styles from "./style.module.scss";
import { animated } from "react-spring";

export const Block = ({ style }: any) => (
  <animated.div style={{ ...style }} className={styles.block} />
);
