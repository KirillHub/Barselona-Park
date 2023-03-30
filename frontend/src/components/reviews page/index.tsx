"use client";

import styles from "./style.module.scss";
import { useSpring, config, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Block } from "../test-anim/block";

const Reviews = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [blocksPosition, setBlocksPosition] = useState(40);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setIsScrollingDown(currentPosition > lastScrollPosition);
      lastScrollPosition = currentPosition;
      setBlocksPosition(prevPosition => (isScrollingDown ? prevPosition - 1 : prevPosition + 1));
    };

    let lastScrollPosition = 0;

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrollingDown]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          width: "200px",
          height: "200px",
          background: "red",
          marginRight: `${blocksPosition}vw`,
        }}
      />
      <div
        style={{
          width: "200px",
          height: "200px",
          background: "blue",
          marginLeft: `${blocksPosition}vw`,
        }}
      />
    </div>
  );
};

export default Reviews;

/*
	анимация с прокруткой

  const { ref, inView } = useInView({
    threshold: 0.5, // порог видимости
  });

  const animationProps = useSpring({
    to: {
      transform: inView ? "rotate(1turn)" : "rotate(0turn)",
    },
    config: config.slow, // тип анимации
  });

  return (
    <div ref={ref} className={styles.reviews}>
      <Square animationProps={animationProps} />
      <Square animationProps={animationProps} />
      <Square animationProps={animationProps} />
      <Square animationProps={animationProps} />
    </div>
  );
*/
