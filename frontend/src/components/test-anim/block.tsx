import styles from "./style.module.scss";
import { animated } from "react-spring";
import useMedia from "use-media";

export const Block = ({ style }: any) => {
// Accepts an object of features to test
const isWide = useMedia({ minWidth: 1000 });
// Or a regular media query string
const reduceMotion = useMedia("(prefers-reduced-motion: reduce)");
console.log(reduceMotion);

	return (
		<div>
      Screen is wide: {isWide ? '😃' : '😢'}
    </div>
	)
  /*
	(
  <animated.div style={{ ...style }} className={styles.block} />
);
	*/
};


