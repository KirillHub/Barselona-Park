import Button from "@/share/components/button";
import { ImageSliderInter } from "@/types/imageSlider";
import { getImagesAndPaths } from "@/utils/getImagesAndPaths";
import Image from "next/image";
import styles from "./style.module.scss";

const DiscoverLocation = ({ fhotoCount, fileName, fileExtension }: ImageSliderInter) => {
  const images = getImagesAndPaths(fhotoCount, fileName, fileExtension);

  const handleClick = () => {
    console.log("user clicked");
  };

  return (
    <div className={styles.discover_location}>
      <div className={styles.discover_location__fhoto_block}>
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
      </div>

      <div className={styles.discover_location__info_block}>
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
      </div>
    </div>
  );
};

export default DiscoverLocation;
