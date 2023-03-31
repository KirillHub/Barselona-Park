import { useSpring, config, animated } from "react-spring";
import useMedia from "use-media";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import Button from "@/share/components/button";
import { ImageSliderInter } from "@/types/imageSlider";
import { getImagesAndPaths } from "@/utils/getImagesAndPaths";
import Image from "next/image";
import styles from "./style.module.scss";

const DiscoverLocation = ({ fhotoCount, fileName, fileExtension }: ImageSliderInter) => {
  const images = getImagesAndPaths(fhotoCount, fileName, fileExtension);

  const isWide = useMedia({ minWidth: 1000 }); // постоянно проверяет измения ширины экрана

  const [ref1, inView1] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });
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

  const handleClick = () => {
    console.log("user clicked");
  };

  useEffect(() => {
    if (inView1 && inView2) {
      const handleScroll = (e: any) => {
        if (position <= 60 && e.deltaY > 0) {
          // && e.deltaY > 0
          const deltaY = e.deltaY;
          const newPosition = position + (deltaY < 0 ? -10 : 10);
          setPosition(newPosition);
        }
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
    <div className={styles.discover_location}>
      <animated.div
        ref={ref1}
        className={styles.discover_location__fhoto_block}
        style={{
          position: "relative",
          marginRight: "6vw",
          ...springProps1,
        }}
      >
        {images.map((image, _) => (
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
        style={{
          position: "relative",
          marginLeft: "6vw",
          ...springProps2,
        }}
      >
        <h2>Откройте для себя Новую локацию</h2>
        <div className={styles.discover_location__descr_block}>
          <div className={styles.discover_location__descr}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse omnis repellendus, animi
            exercitationem quas ratione inventore dolorem quibusdam vitae nobis aperiam eligendi
            magni odio quos error aspernatur velit assumenda qui! magni odio quos error aspernatur
            velit assumenda qui!
          </div>

          {/* <div className={styles.discover_location__descr}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse omnis repellendus, animi
            exercitationem quas ratione inventore dolorem quibusdam vitae nobis aperiam eligendi
            magni odio quos error aspernatur velit assumenda qui! magni odio quos error aspernatur
            velit assumenda qui!
          </div> */}
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
