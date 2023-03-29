"use client";

import Image from "next/image";
import Link from "next/link";
import { categories } from "./categories";
import styles from "./style.module.scss";
import { useSpring, config } from "react-spring";
import { useInView } from "react-intersection-observer";
import { animated } from "react-spring";

export default function SelectCategory() {
  const { ref, inView } = useInView({
    threshold: 0.5, // порог видимости
  });

  const animationProps = useSpring({
    to: {
      transform: inView ? "rotate(1turn)" : "rotate(0turn)",
    },
    config: config.molasses, // тип анимации
  });

  return (
    <div ref={ref} className={styles.selectCategory}>
      {categories.map((category, i) => (
        <animated.div key={i} style={animationProps}>
          <Link href={category.link} key={category.name}>
            <span className={styles.selectCategory__title}>{category.name}</span>
            <div className={styles.selectCategory__image}>
              <Image
                fill
                quality={75}
                sizes='calc(100px + 150 * (100vw / 1920))'
                src={category.src}
                alt={category.alt}
                style={{
                  borderRadius: "calc(8px + 8 * (100vw / 1920))",
                  objectFit: "contain",
                }}
              />
            </div>
          </Link>
        </animated.div>
      ))}
    </div>
  );
}

/*
всегда можно откатить <- back))

 <Link href={category.link} key={category.name}>
          <span className={styles.selectCategory__title}>{category.name}</span>
          <div className={styles.selectCategory__image}>
            <Image
              fill
              quality={75}
              sizes='calc(100px + 150 * (100vw / 1920))'
              src={category.src}
              alt={category.alt}
              style={{
                borderRadius: "calc(8px + 8 * (100vw / 1920))",
                objectFit: "contain",
              }}
            />
          </div>
        </Link>
*/
