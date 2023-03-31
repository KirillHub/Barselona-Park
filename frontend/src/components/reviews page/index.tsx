"use client";

import styles from "./style.module.scss";
import { useSpring, config, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const Reviews = () => {
  const [ref1, inView1] = useInView({ threshold: 0.5 });
  const [ref2, inView2] = useInView({ threshold: 0.5 });
  const [position, setPosition] = useState(0);

  const springProps1 = useSpring({
    to: {
      transform: `translateX(${position}px)`,
    },
    config: {
      tension: 300,
      friction: 20,
      mass: 2,
    },
  });

  const springProps2 = useSpring({
    to: {
      transform: `translateX(${-position}px)`,
    },
    config: {
      tension: 300,
      friction: 20,
      mass: 2,
    },
  });

  useEffect(() => {
    if (inView1 && inView2) {
      const handleScroll = (e: any) => {
        //   if (position <= 300) { }  //?
        const deltaY = e.deltaY;
        const newPosition = position + (deltaY < 0 ? -100 : 100);
        setPosition(newPosition);
      };

      console.log(position);

      document.addEventListener("wheel", handleScroll);

      return () => {
        document.removeEventListener("wheel", handleScroll);
      };
    }
  }, [position, inView1, inView2]);

  useEffect(() => {
    if (inView1 && inView2) {
      setPosition(0);
    }
  }, [inView1, inView2]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <animated.div
        ref={ref1}
        style={{
          width: "600px",
          height: "200px",
          background: "red",
          marginRight: "25vw",
          ...springProps1,
        }}
      />
      <animated.div
        ref={ref2}
        style={{
          width: "600px",
          height: "200px",
          background: "blue",
          marginLeft: "25vw",
          ...springProps2,
        }}
      />
    </div>
  );
};

export default Reviews;
