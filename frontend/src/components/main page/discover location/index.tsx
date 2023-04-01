import { useSpring, config, animated } from "react-spring";
import useMedia from "use-media";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";
import Button from "@/share/components/button";
import { ImageSliderInter } from "@/types/imageSlider";
import { getImagesAndPaths } from "@/utils/getImagesAndPaths";
import Image from "next/image";
import styles from "./style.module.scss";

const DiscoverLocation = ({ fhotoCount, fileName, fileExtension }: ImageSliderInter) => {
  const images = getImagesAndPaths(fhotoCount, fileName, fileExtension);
  const sortedImages = useRef<{ name: number; path: string }[]>([]); //

  const isWide = useMedia({ minWidth: 1200 });
  const isTablet = useMedia({ maxWidth: 768 });
  const isSmall = useMedia({ maxWidth: 600 });

  const [ref1, inView1] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  const [position, setPosition] = useState(0);

  const springProps1 = useSpring({
    to: {
      transform: `translateX(${isWide ? position : 0}px)`,
    },
    config: {
      tension: 300,
      friction: 20,
      mass: 2,
    },
  });

  const springProps2 = useSpring({
    to: {
      transform: `translateX(${isWide ? -position : 0}px)`,
    },
    config: {
      tension: 300,
      friction: 20,
      mass: 2,
    },
  });

  const handleClick = () => {
    console.log("user clicked");
  };

  useEffect(() => {
    if (inView1 && inView2) {
      const handleScroll = (e: any) => {
        if (position <= 50 && e.deltaY > 0) {
          const deltaY = e.deltaY;
          const newPosition = position + (deltaY < 0 ? -13 : 13);
          setPosition(newPosition);
        }

        if (e.deltaY < 0 && position <= 10) setPosition(15);
      };

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

  useEffect(() => {
    let koef = 0;
    isTablet ? (koef = 2) : koef;
    isSmall ? (koef = 3) : koef;

    sortedImages.current = [...images].sort(() => Math.random() - 0.5).splice(koef);
  }, [isTablet, isSmall, images]);

  return (
    <div className={styles.discover_location}>
      <animated.div
        ref={ref1}
        className={styles.discover_location__fhoto_block}
        style={{ ...springProps1 }}
      >
        {sortedImages.current.map((image, _) => (
          <div key={image.name} className={styles.discover_location__grid_container}>
            <Image
              key={image.name}
              src={image.path}
              alt={`${image.name}`}
              fill
              className={styles.discover_location__fhoto}
            />
          </div>
        ))}
      </animated.div>

      <animated.div
        ref={ref2}
        className={styles.discover_location__info_block}
        style={{ ...springProps2 }}
      >
        <h2>Откройте для себя Новую локацию</h2>
        <div className={styles.discover_location__descr_block}>
          <div className={styles.discover_location__descr}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse omnis repellendus, animi
            exercitationem quas ratione inventore dolorem quibusdam vitae nobis aperiam eligendi
            magni odio quos error aspernatur velit assumenda qui! magni odio quos error aspernatur
            velit assumenda qui!
          </div>

          <div className={styles.discover_location__descr}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse omnis repellendus, animi
            exercitationem quas ratione inventore dolorem quibusdam vitae nobis aperiam eligendi
            magni odio quos error aspernatur velit assumenda qui! magni odio quos error aspernatur
            velit assumenda qui!
          </div>
        </div>
        <Button onClick={() => handleClick()} className={styles.btn_custom}>
          узнать больше
        </Button>
      </animated.div>
    </div>
  );
};

export default DiscoverLocation;

/*
 <h3>премиальная резиденция & лучшие условия</h3>
        <h2>
          Откройте для себя <br /> <span>Новую локацию</span>
        </h2>

        <div className={styles.discover_location__descr_block}>
          <div className={styles.discover_location__descr}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse omnis repellendus, animi
            exercitationem quas ratione inventore dolorem quibusdam vitae nobis aperiam eligendi
            magni odio quos error aspernatur velit assumenda qui! magni odio quos error aspernatur
            velit assumenda qui!
          </div>

          <div className={styles.discover_location__descr}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse omnis repellendus, animi
            exercitationem quas ratione inventore dolorem quibusdam vitae nobis aperiam eligendi
            magni odio quos error aspernatur velit assumenda qui! magni odio quos error aspernatur
            velit assumenda qui!
          </div>
        </div>

        <Button onClick={() => handleClick()} className={styles.btn_custom}>
          узнать больше
        </Button>
*/
